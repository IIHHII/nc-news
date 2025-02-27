import axios from "axios";

const BASE_URL = "https://burhan-s-project.onrender.com/api";

export const fetchAllArticles = () => {
  return axios.get(`${BASE_URL}/articles`).then((res) => res.data.articles);
};

export const fetchSingleArticle = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then((res) => res.data.article[0]);
};

export const fetchArticleComments = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then((res) => res.data.articleComments);
};

export const updateArticleVotes = (article_id, voteChange) => {
  return axios.patch(`${BASE_URL}/articles/${article_id}`, {
    inc_votes: voteChange,
  });
};

export const postComment = (article_id, commentData) => {
  const { author, body } = commentData;
  return axios
    .post(`${BASE_URL}/articles/${article_id}/comments`, {
      username: author, 
      body,
    })
    .then((res) => res.data.comment);
};

export const deleteComment = (comment_id) => {
  return axios.delete(`${BASE_URL}/comments/${comment_id}`);
};
