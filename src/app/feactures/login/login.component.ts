import { Component } from '@angular/core';
import { AuthStateService } from './state/auth-state.service';
import { AuthFacadeService } from './facade/auth-facade.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private authFacadeService: AuthFacadeService){
  }

  protected onLogin():void{
    this.authFacadeService.login();

  }
}
