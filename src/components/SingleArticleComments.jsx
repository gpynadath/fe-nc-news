import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { deleteComment, getComments, patchArticleVotes } from "../api/api";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

const SingleArticleComments = () => {
  const { user } = useContext(UserContext);
  const [deletedFeedback, setDeletedFeedback] = useState("");
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id, setComments);
    patchArticleVotes(article_id);
  }, [deletedFeedback]);

  useEffect(() => {
    getComments(article_id, setComments);
  }, [comments]);
  
  function handleDelete(event) {
    deleteComment(event.target.value);
    setDeletedFeedback("Message successfully deleted");
  }

  return (
    <div>
      {deletedFeedback}
      <Card sx={{ minHeight: 700, width: 800 }}>
        <CardContent>
          <ul className="comments">
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="comment">
                  <Typography variant="subtitle1">{comment.body}</Typography>
                  <Typography variant="body1" id="commentAuthor">
                    {comment.author}
                  </Typography>
                  <Typography variant="body2">Votes:{comment.votes}</Typography>
                  {user.username === comment.author ? (
                    <button value={comment.comment_id} onClick={handleDelete}>
                      X
                    </button>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleArticleComments;
