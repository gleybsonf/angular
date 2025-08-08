import { Injectable } from '@angular/core';
import { AuthFacadeService } from '../facade/auth-facade.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(private authService: AuthService) { }

  protected login(): void {
    // Logic for logging in the user
    console.log('User logged in through state service');
    this.authService.onLogin("", "");
  }   
   
}
