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


  // get one thought by ID

  getThoughtsById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .select("-__v")
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found with this ID." });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
