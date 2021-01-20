import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "./user.model";

@Injectable()

export class AuthService {

    currentUser: IUser

    loginUser(userName: string, lastName: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Telma',
            lastName: 'Jenkins',
            userName: 'Teljen'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}