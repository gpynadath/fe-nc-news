import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../api/api";

import Card from "@mui/material/Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sorting from "./Sorting";

const TopicArticles = () => {
  const { topic } = useParams();
  const [topicArticles, setTopicArticles] = useState([]);
  const [isError, setIsError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order_by");

  useEffect(() => {
    getArticles(sortBy, orderBy, topic)
      .then(({ data }) => {
        setTopicArticles(data.article);
      })
      .catch((err) => {
        setIsError("Topic Not Found");
      });
  }, [topicArticles]);
  return (
    <div>
      {isError ? (
        isError
      ) : (
        <>
          <h2>Articles on the topic {topic}</h2>
          <>
            {" "}
            <Sorting
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />{" "}
          </>
          <ul>
            {topicArticles.map((article) => {
              return (
                <li key={article.article_id}>
                  <Card sx={{ minHeight: 700, width: 800 }}>
                    <CardMedia
                      component="img"
                      sx={{ height: 400, width: 800 }}
                      image={article.article_img_url}
                      title="article image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.body}
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
                      <Typography variant="body2" color="text.secondary">
                        Votes: {article.votes}
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
        </>
      )}
    </div>
  );
};

export default TopicArticles;
