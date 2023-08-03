const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userRoutesPath = "/api/users";

    //Middlewares
    this.middlewares();

    //App routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Get data from post
    this.app.use(express.json());
    //Public directory

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userRoutesPath, require("../routes/user"));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

module.exports = Server;
