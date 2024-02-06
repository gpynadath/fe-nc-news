import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { postComment } from "../api/api";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const [comment, setComment] = useState("");
  const [feedback, setFeedback] = useState("");
  const { article_id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();

    postComment(article_id, { username: "grumpy19", body: comment })
      .then((data) => {
        setFeedback("Comment Posted Successfully");
      })
      .catch((err) => {
        setFeedback("Unable to post comment");
      });
  }

  function handleInput(event) {
    setComment(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add a comment"
          onChange={handleInput}
          value={comment}
          required
        />
        <br></br>
        <Button fontSize="large">POST</Button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default PostComment;
