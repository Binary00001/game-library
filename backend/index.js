import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/apiRoutes";

const app = express();
const PORT = 8000;

//set up mongo connection (local)
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/gamesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set up cors
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send("Testing");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
