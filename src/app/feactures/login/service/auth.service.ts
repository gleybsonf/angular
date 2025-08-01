import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from '../../registration-people/interfaces/user';
import { userMock } from '../../registration-people/mocks/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '/api/auth';
  
  constructor(private http: HttpClient){

  }

  protected onLogin(email: string, password: string): Observable<IUser>{
    return of(userMock).pipe(delay(5000))
    //this.http.post<IUser>(`${this.baseUrl}/login`, { email, password });
  }
}
