import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
    providedIn: 'root'
})
export class Auth {
    private user: User = {
        id: 1,
        name: "Randy Flores",
        email: "randyflores@gmail.com",
        role: "user",
    }

    private isLogin = true;

    currentUser(): User{
        return this.user
    }

    getIsLogin(): boolean{
        return this.isLogin
    }

}
