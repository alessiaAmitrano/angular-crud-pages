import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthenticationService } from 'core/authentication/services/authentication.service';
import { Login } from 'core/store/authentication.actions';
import { tap } from 'rxjs/operators';

export class AuthStateModel {
    token: string;
    username: string;
    password: string;
}

@State<AuthStateModel>({
    name: 'auth'
})

export class AuthState {
    @Selector()
    static token(state: AuthStateModel) {
        return state.token;
    }

    constructor(private authService: AuthenticationService) { }

    @Action(Login)
    Login({ patchState }: StateContext<AuthStateModel>, { payload: { username, password } }: Login) {
        patchState({
            username: username,
            password: password
        });
    }
}
