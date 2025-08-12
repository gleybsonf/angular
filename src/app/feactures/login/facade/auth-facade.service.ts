import { Injectable } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { AuthStateService } from "../state/auth-state.service";

@Injectable({
  providedIn: "root",
})
export class AuthFacadeService {
  constructor(private _authStateService: AuthStateService) {}

  public login(user: string, password: string): void {
    // Logic for logging in the user
    console.log("User logged in through facade");
    this._authStateService.login(user, password);
  }

  public logout(): void {
    // Logic for logging out the user
    console.log("User logged out through facade");
  }

  public get user$() {
    return this._authStateService.user$;
  }

  public get loading$() {
    return this._authStateService.loading$;
  }

  public get error$() {
    return this._authStateService.error$;
  }
}
