//import modules to use in apiRoutes
import {
  getGames,
  addGame,
  getGameById,
  updateGame,
  deleteGame
} from "../controllers/gameControllers";

const routes = app => {
  app
    .route("/games")
    //set the GET route to get all games
    .get(getGames)
    //set POST route to add new game
    .post(addGame);

  app
    .route("/games/:GameId")
    //set GET route to get game by id
    .get(getGameById)
    //set PUT route to update game using id
    .put(updateGame)
    //set DELETE route to delete a game from the database
    .delete(deleteGame);
};

export default routes;
