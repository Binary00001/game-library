import mongoose from "mongoose";
import { GameSchema } from "../models/gameModel";

const Game = mongoose.model("Game", GameSchema);

//function to get all games from database
export const getGames = (req, res) => {
  Game.find({}, (err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

//function to add new game to database
export const addGame = (req, res) => {
  let newGame = new Game(req.body);

  //save game to database
  newGame.save((err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

//function to get game by ID
export const getGameById = (req, res) => {
  Game.findById(req.params.GameId, (err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

//function to update a game
export const updateGame = (req, res) => {
  Game.findOneAndUpdate(
    { _id: req.params.GameId },
    req.body,
    { new: true },
    (err, Game) => {
      if (err) {
        res.send(err);
      }
      res.json(Game);
    }
  );
};

//function to delete a game
export const deleteGame = (req, res) => {
  Game.remove({ _id: req.params.GameId }, (err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json({ msg: "Successfully deleted Game" });
  });
};
