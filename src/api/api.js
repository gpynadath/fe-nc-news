import axios from "axios";

const getArticles = async (setArticles) => {
  return await axios
    .get("https://nc-news-1yod.onrender.com/api/articles")
    .then(({ data }) => {
      setArticles(data.article);
    });
};

const getSingleArticle = (article_id, setArticleInfo) => {
  return axios
    .get(`https://nc-news-1yod.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      setArticleInfo(data.data);
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

export { getArticles, getSingleArticle, getComments, patchArticleVotes };
