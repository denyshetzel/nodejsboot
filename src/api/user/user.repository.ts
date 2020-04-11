import { Service } from 'typedi';

import { User } from "./user.model";

@Service()
export class UserRepository{

    constructor(){}

    public insert(user: User): User{
        return user;
    }

    public update(user: User): User{
        return user;
    }

    public delete(user: User): void{
    }

    public getById(id: number): User{
        return null;
    }

    public getAll(): Array<User>{
        return new Array<User>();
    }
}