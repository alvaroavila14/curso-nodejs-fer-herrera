const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authUsersPath = "/api/auth";
    this.userRoutesPath = "/api/users";

    //Connect to DB
    this.database();

    //Middlewares
    this.middlewares();

    //App routes
    this.routes();
  }

  async database() {
    //Connect to DB
    await dbConnection();
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
    this.app.use(this.authUsersPath, require("../routes/auth"));
    this.app.use(this.userRoutesPath, require("../routes/user"));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

module.exports = Server;
