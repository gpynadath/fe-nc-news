import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/singleArticle.css";
import { getSingleArticle, patchArticleVotes } from "../api/api";
import Card from "@mui/material/Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SingleArticleComments from "./SingleArticleComments";
import PostComment from "./PostComment";
import UserContext from "../context/UserContext";

const SingleArticle = () => {
  const { user } = useContext(UserContext);
  const [articleInfo, setArticleInfo] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [viewComments, setViewComments] = useState(false);
  const [votes, setVotes] = useState(10);
  const [isError, setIsError] = useState("");
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id, setArticleInfo).catch(() => {
      setIsError("No article found");
    });
  }, []);

  useEffect(() => {
    setVotes(articleInfo.votes);
  }, [articleInfo]);

  function modifyVote(vote) {
    setIsDisabled(true);
    patchArticleVotes(article_id, vote)
      .then((res) => {
        setVotes((currentVote) => (currentVote += vote));
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  return (
    <div>
      {isError ? (
        isError
      ) : (
        <Card sx={{ minHeight: 700, width: 800 }}>
          <CardMedia
            component="img"
            sx={{ height: 400, width: 800 }}
            image={articleInfo.article_img_url}
            title="article image"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {articleInfo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {articleInfo.body}
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
            <Typography variant="body2" color="text.secondary">
              Votes: {votes}
            </Typography>
          </CardContent>
          <Button onClick={() => modifyVote(1)} disabled={isDisabled}>
            <ArrowUpwardIcon fontSize="large" />
          </Button>
          <Button onClick={() => modifyVote(-1)} disabled={isDisabled}>
            <ArrowDownwardIcon fontSize="large" />
          </Button>
          {isError && <h4>Unable to add your vote</h4>}
          <br></br>
          <PostComment />

          <Button
            id="commentsButton"
            onClick={() => {
              setViewComments(!viewComments);
            }}
          >
            View comments
          </Button>
          <>{viewComments && <SingleArticleComments />}</>
        </Card>
      )}
    </div>
  );
};

export default SingleArticle;

{
  /* } */
}
