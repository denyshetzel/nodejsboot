import { Service } from 'typedi';

import { UserRepository } from "./user.repository";
import { User } from "./user.model";

@Service()
export class UserService{

    constructor(private _userRepository: UserRepository){}

    public createUser(user: User): User{
        return this._userRepository.insert(user);
    }

    public updateUser(user: User): User{
        return this._userRepository.update(user);
    }

    public deleteUser(user: User): void{
        this._userRepository.delete(user);
    }

    public getById(id: number): User{
        return this._userRepository.getById(id);
    }

}