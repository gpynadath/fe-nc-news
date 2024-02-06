import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getComments, patchArticleVotes } from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleArticleComments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id, setComments);
  }, []);
  patchArticleVotes(article_id);
  return (
    <div>
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
