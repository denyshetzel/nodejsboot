import express from 'express';
import {Service, Container} from "typedi";

import { UserController } from './user.controller';

@Service()
class UserRoute{

    private router: express.Router;

    constructor(private _userController: UserController){
        this.router = express.Router();
    }
    
    public routes(): express.Router{
        this.router.route("/v1/users").get(this._userController.getAll);
        this.router.route("/v1/users/:id").get(this._userController.getById);
        this.router.route("/v1/users").post(this._userController.getAll);
        this.router.route("/v1/users/:id").put(this._userController.update);
        this.router.route("/v1/users/:id").delete(this._userController.delete);

        return this.router;
    }
}
export const userRoute = Container.get(UserRoute);