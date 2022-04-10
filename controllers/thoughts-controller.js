const { Thoughts } = require("../models");

const thoughtsController = {
  // get all thoughts

  getThoughts(req, res) {
    Thoughts.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log("There was an error. " + err);
        res.status(400).json(err);
      });
  },

