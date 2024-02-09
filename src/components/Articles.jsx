import "../styles/articles.css";
import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getArticles } from "../api/api";
import Sorting from "./Sorting";
import { Button } from "@mui/material";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order_by");

  useEffect(() => {
    getArticles(sortBy, orderBy).then(({ data }) => {
      setArticles(data.article);
    });
  }, [articles]);

  return (
    <div>
      <Sorting searchParams={searchParams} setSearchParams={setSearchParams} />
      <ul className="article">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Card sx={{ height: 500, maxWidth: 400 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={article.article_img_url}
                  title="article image"
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
                    <Button>Learn More</Button>
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
