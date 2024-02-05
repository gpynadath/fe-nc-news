import "../styles/articles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getArticles } from "../api/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(setArticles);
  }, []);


  return (
    <div>
      <ul className="article">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Card sx={{ height: 500, maxWidth: 400 }}>
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
                    Author: {article.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Topic: {article.topic}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comment Count: {article.comment_count}
                  </Typography>
                  <Link to={`/articles/${article.article_id}`}>
                    <button>Learn More</button>
                  </Link>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
