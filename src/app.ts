import 'reflect-metadata';

import express, { Router, Application } from 'express';
import Logger from './loaders/logger.loader';
import config from './app.config';
import appConfig from './app.config';

export default class App {
    private static instance: App;

    public server: Application;
  
    constructor (middlewares: Array<any>) {
      this.initializeServer();
      this.initializeDatabase();
      this.middlewares(middlewares);
    }
  
    private initializeServer(){
      this.server = express();
      const router = express.Router();
      this.server.use(appConfig.api.prefix, router);
    }

    private initializeDatabase():void {
      // mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/tsexample`, { useNewUrlParser: true })
    }
  
    private middlewares(middlewares: Array<any>): App{
        middlewares.forEach(middleware => {
          this.server.use(middleware);
          Logger.info(`${middleware.name} was loaded` );
        });
        return this;
    }

    public route(router: Router): App{
      this.server.use(config.api.prefix, router);
      return this;
    }

    public express(): Application{
      return this.server;
    }

    public start():void {
      this.server.listen(process.env.PORT, () => {
        Logger.info(`Listening on port: ${process.env.PORT}`);
      });
    } 

  }
  