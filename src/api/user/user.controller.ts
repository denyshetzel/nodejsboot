import { Request, Response } from "express-serve-static-core";
import { Service } from 'typedi';

import { UserService } from "./user.service";

@Service()
export class UserController{

    constructor(private _userService: UserService){}

    public getAll(request: Request, response: Response): Response{
        return response.send('getAll');
    }

    public getById(request: Request, response: Response): Response{
        return response.send('getById');
    }
    
    public create(request: Request, response: Response): Response{
        return response.send('createuser');
    }

    public update(request: Request, response: Response): Response{
        return response.send('update');
    }

    public delete(request: Request, response: Response): Response{
        return response.send('delete');
    }

}