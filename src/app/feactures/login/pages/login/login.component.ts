import { Component, OnInit, Signal, signal } from "@angular/core";
import { AuthFacadeService } from "../../facade/auth-facade.service";
 
import { toSignal } from "@angular/core/rxjs-interop";
import { Subject } from "rxjs";

@Component({
  selector: "app-login",
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  standalone: true,
})
export class LoginComponent implements OnInit {
  protected loading!: Signal<boolean>;
  protected error!: Signal<string | null>;

   
  constructor(private authFacadeService: AuthFacadeService) {
    this.handleLoginError();
    this.handleLoading();
  }

  private handleLoginError(): void {
    this.error = toSignal(this.authFacadeService.error$, {
      initialValue: null,
    });
  }

  private handleLoading(): void {
    this.loading = toSignal(this.authFacadeService.loading$, {
      initialValue: false,
    });
  }

  protected onLogin(): void {
    const userLogin: { user: string; password: string } = {
      user: "testUser",
      password: "testPassword",
    };

    this.authFacadeService.login(userLogin.user, userLogin.password) ;
  }

  protected onLoginGoogle(): void {
    //this.authFacadeService.loginWithGoogle();
  }

  private onLogout(): void {
    this.authFacadeService.logout();
  }

  ngOnInit(): void {
    console.log("Login component initialized");
  }
}
