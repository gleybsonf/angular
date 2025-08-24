import { Injectable } from "@angular/core";
import { AuthFacadeService } from "../facade/auth-facade.service";
import { AuthService } from "../service/auth.service";
import { BehaviorSubject, finalize, tap } from "rxjs";
import { IUser } from "../../registration-people/interfaces/user";

@Injectable({
  providedIn: "root",
})
export class AuthStateService {
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private userSubject = new BehaviorSubject<IUser | null>(null);
  private errorSubject = new BehaviorSubject<string | null>(null);

  public readonly loading$ = this.loadingSubject.asObservable();
  public readonly user$ = this.userSubject.asObservable();
  public readonly error$ = this.errorSubject.asObservable();

  constructor(private authService: AuthService) {}

  public setLoading(value: boolean) {
    this.loadingSubject.next(value);
  }

  public setUser(user: IUser | null) {
    this.userSubject.next(user);
  }

  public setError(error: string | null) {
    this.errorSubject.next(error);
  }

}
