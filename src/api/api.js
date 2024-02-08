import axios from "axios";

const getArticles = (sort, order, topic) => {
  const queryString = "https://nc-news-1yod.onrender.com/api/articles";
  const params = { sort_by: sort, order: order, topic: topic };
  return axios.get(queryString, { params }).catch((err) => {
    console.log(err, "hello");
  });
};

const getSingleArticle = (article_id, setArticleInfo) => {
  return axios
    .get(`https://nc-news-1yod.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      setArticleInfo(data.data);
    })
    .catch((err) => {
      throw Error("Nooooo")
    });
};

const getComments = (article_id, setComments) => {
  return axios
    .get(
      `https://nc-news-1yod.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      setComments(data.comments);
    });
};

function patchArticleVotes(article_id, votes) {
  return axios
    .patch(`https://nc-news-1yod.onrender.com/api/articles/${article_id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data.article;
    });
}

function postComment(article_id, comment) {
  return axios
    .post(
      `https://nc-news-1yod.onrender.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data.comment;
    });
}

function deleteComment(comment_id) {
  return axios.delete(
    `https://nc-news-1yod.onrender.com/api/comments/${comment_id}`
  );
}

function getTopics() {
  return axios.get("https://nc-news-1yod.onrender.com/api/topics");
}

function getTopicImage() {
  return axios.get();
}

function getTopicArticles(topic, sort, order) {
  const queryString = `https://nc-news-1yod.onrender.com/api/articles?topic=${topic}`;
  const params = { sort_by: sort, order: order };

  return axios.get(queryString, { params });
}

export {
  getArticles,
  getSingleArticle,
  getComments,
  patchArticleVotes,
  postComment,
  deleteComment,
  getTopics,
  getTopicImage,
  getTopicArticles,
};
