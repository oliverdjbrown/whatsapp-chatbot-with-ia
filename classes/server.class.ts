import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "../routes/user.routes";
import groupRoutes from "../routes/group.routes";
import dbConnection from "../database/connection";
import { api } from "../enums/api_path";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.dbConnection();
    this.middleware();
    this.routes();
  }

  async dbConnection() {
    await dbConnection();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(api.users, userRoutes);
    this.app.use(api.groups, groupRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on port ${this.port}`);
    });
  }
}

export default Server;
