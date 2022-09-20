const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://mini-socialmediaapp.herokuapp.com";

module.exports = baseUrl;
