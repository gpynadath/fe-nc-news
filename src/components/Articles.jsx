import "../styles/articles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    return await axios
      .get("https://nc-news-1yod.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.article);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  console.log(articles);
  return (
    <div>
      <ul className="article">
        {articles.map((article) => {
          return (
            <li>
              <Card sx={{ height:500,maxWidth: 400 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={article.article_img_url}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {article.article_id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Author: {article.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Topic: {article.topic}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comment Count: {article.comment_count}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
