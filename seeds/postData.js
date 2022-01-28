const { Post } = require("../models");

const postdata = [
  {
    title: "What is React ?",
    contents:
      "React is a library for helping developers build user interfaces (UIs)",
    user_id: 1,
  },
  {
    title: "Component",
    contents:
      "Is a mixture is of HTML and JavaScript that captures all of the logic required",
    user_id: 1,
  },
  {
    title: "Node.js",
    contents:
      "is actually not a framework or a library, but a runtime environment, based on Chrome’s V8 JavaScript engine. ",
    user_id: 1,
  },
  {
    title: "Javascript",
    contents: "Have you guys played the new Fortnite Chapter 3?  It's fun!",
    user_id: 2,
  },
  {
    title: "Front End?",
    contents:
      "Refers to the visual elements that users see and interact  ",
    user_id: 3,
  },
  {
    title: "MacOS vs. Windows",
    contents:
      "It all comes down to personal preference and the type of work you do. ",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;