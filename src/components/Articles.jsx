import "../styles/articles.css";
import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getArticles } from "../api/api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order_by");

  function setSortBy(value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", value);
    setSearchParams(newParams);
  }

  function setOrderBy(value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order_by", value);
    setSearchParams(newParams);
  }

  useEffect(() => {
    getArticles(setArticles, sortBy, orderBy);
  }, [articles]);

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: "White" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort By"
        >
          <MenuItem
            onClick={() => setSortBy("created_at")}
            value={"created_at"}
          >
            Date
          </MenuItem>
          <MenuItem
            onClick={() => setSortBy("comment_count")}
            value={"comment_count"}
          >
            Comment Count
          </MenuItem>
          <MenuItem onClick={() => setSortBy("votes")} value={"votes"}>
            Votes
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label2" sx={{ color: "White" }}>
          Order By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          label="Order By"
        >
          <MenuItem onClick={() => setOrderBy("asc")} value={"asc"}>
            Ascending
          </MenuItem>
          <MenuItem onClick={() => setOrderBy("desc")} value={"desc"}>
            Descending
          </MenuItem>
        </Select>
      </FormControl>
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
