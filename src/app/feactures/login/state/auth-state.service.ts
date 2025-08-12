import { Injectable } from "@angular/core";
import { AuthFacadeService } from "../facade/auth-facade.service";
import { AuthService } from "../service/auth.service";
import { BehaviorSubject, finalize, tap } from "rxjs";
import { IUser } from "../../registration-people/interfaces/user";

@Injectable({
  providedIn: "root",
})
export class AuthStateService {
  private readonly _user = new BehaviorSubject<IUser | null>(null);
  private readonly _loading = new BehaviorSubject<boolean>(false);
  private readonly _error = new BehaviorSubject<string | null>(null);

  readonly user$ = this._user.asObservable();
  readonly loading$ = this._loading.asObservable();
  readonly error$ = this._error.asObservable();

  constructor(private authService: AuthService) {}

  public login(user: string, password: string): void {
    this._loading.next(true);
    this.authService
      .onLogin(user, password)
      .pipe(
        tap((user) => {
          this._user.next(user);
          this._loading.next(false);
          this._error.next(null);
        }),
        finalize(() => {
          this._loading.next(false);
        })
      )
      .subscribe({
        error: (error) => {
          this._error.next(error.message);
          this._loading.next(false);
        },
      });
  }

  protected logout(): void {
    this._user.next(null);
    this._error.next(null);
  }
}
