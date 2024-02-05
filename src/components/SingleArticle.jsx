import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const SingleArticle = () => {
  const [articleInfo, setArticleInfo] = useState([]);
  const { article_id } = useParams();
  const getSingleArticle = () => {
    return axios
      .get(`https://nc-news-1yod.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        setArticleInfo(data.data);
      });
  };

  useEffect(() => {
    getSingleArticle();
  }, []);

  return (
    <div>
      <Card sx={{ minHeight: 700, width: 800 }}>
        <CardMedia
          sx={{ height: 400, width: 800 }}
          image={articleInfo.article_img_url}
          title="article image"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {articleInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {articleInfo.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Topic: {articleInfo.topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Comment Count: {articleInfo.comment_count}
          </Typography>
        </CardContent>
        <TextField label="Add a comment" />
        <Button>POST</Button>
        <Button>
          <ThumbUpIcon fontSize="large" />
        </Button>
      </Card>
    </div>
  );
};

export default SingleArticle;
