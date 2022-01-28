const { Comment } = require("../models");

const commentdata = [
  {
    comment: "Yes React is widely used for programming",
    post_id: 1,
    user_id: 1,
  },
  {
    comment: "React makes JavaScript coding easier.",
    post_id: 1,
    user_id: 2,
  },
  {
    comment: " Allows you to make web pages interactive",
    post_id: 4,
    user_id: 1,
  },
  {
    comment: "I Prefer back-end .",
    post_id: 5,
    user_id: 3,
  },
  {
    comment: "I Like Mac but i also use Windows.",
    post_id: 6,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;