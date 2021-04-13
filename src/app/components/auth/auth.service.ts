import { AuthData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string
  private authStatusListener = new Subject<boolean>()

  getToken() {
    return this.token;
  }
  
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  constructor(private http: HttpClient) {}

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password }
    
    this.http.post("http://localhost:3000/user/signup", authData)
      .subscribe(response => {
      console.log(response)
    })
       
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password }
    this.http.post<{token: string}>('http://localhost:3000/user/login', authData).subscribe(response => {
      const token = response.token;
      this.token = token;
      this.authStatusListener.next(true);
      console.log(this.authStatusListener)
    })
  }
  
}
