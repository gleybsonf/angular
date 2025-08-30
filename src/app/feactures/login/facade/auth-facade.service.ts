import { Injectable } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { AuthStateService } from "../state/auth-state.service";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";
import { IUser } from "../../registration-people/interfaces/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthFacadeService {
  
  public loading$ : Observable<boolean>;  
  public user$ : Observable<IUser | null>;
  public error$  : Observable<string | null>;

  constructor(
    private _authStateService: AuthStateService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loading$ = this._authStateService.loading$;
    this.user$ = this._authStateService.user$;
    this.error$ = this._authStateService.error$;
  }

  public login(username: string, password: string): Observable<IUser | null> {
    this._authStateService.setLoading(true);
    return this.authService
      .onLogin(username, password)
      .pipe(
        tap((res) => {
          this.saveAuthData("res.token", "null" /* res.user */);
          this._authStateService.setUser(null /* res.user */);
          this.router.navigate(["/home"]);
        }),
        catchError((err) => {
          this._authStateService.setError("Usuário ou senha inválidos");
          return throwError(() => err);
        }),
        finalize(() => {
          this._authStateService.setLoading(false);
        })
      )
       
  }

  logout() {
    this.authService.logout();
    this._authStateService.setUser(null);
    this.router.navigate(["/login"]);
  }

  private saveAuthData(token: string, user: string /* IUser */) {
    /* localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(user)); */
  }
}
