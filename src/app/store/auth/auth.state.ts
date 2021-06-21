import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';
import { LOGIN, LOGOUT } from './auth.action';
import { AuthService } from './auth.service';

export class AuthStateModel {
    token: string;
    userInfo: {
        username: string
    };
    isLoggedIn: boolean
}

@State<AuthStateModel>({
    name: 'AuthState',
    defaults: {
        token: null,
        userInfo: null,
        isLoggedIn: false,
    }
})

@Injectable()
export class AuthState {
    constructor(
        private authService: AuthService,
        private router : Router
        ) { }

    @Selector()
    static isAuthenticated(state: AuthStateModel) {
        return state.token && state.userInfo ? true : false;
    }


    @Action(LOGIN)
    public login({ getState, patchState, dispatch }: StateContext<AuthStateModel>, { payload }: LOGIN) {
        return this.authService.login(payload).pipe(
            map(res => {
                const userList = res ? res.user : [];
                const user = userList && userList.length > 0 ? userList.find(user => user.username == payload.username && user.password == payload.password) : null;
                patchState({
                    token: user ? user.token : null,
                    userInfo: user ? user.username : null,
                    isLoggedIn: user ? true : false
                })

            })
        )

    }

    @Action(LOGOUT)
    public logout({ getState, patchState, dispatch }: StateContext<AuthStateModel>) {
        return patchState({
            token: null,
            userInfo: null,
            isLoggedIn: false
        })
    }



}