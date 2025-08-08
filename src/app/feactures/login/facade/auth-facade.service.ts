import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor() { }

  login(): void {
    // Logic for logging in the user
    console.log('User logged in through facade');
  }
  
}
