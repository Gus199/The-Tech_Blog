const { User } = require("../models");

const userdata = [
  {
    username: "Gus Gher",
    password: "abc123",
  },
  {
    username: "Sarah",
    password: "abc123",
  },
  {
    username: "Augy",
    password: "abc123",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;