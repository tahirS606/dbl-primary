import { environment } from './../../environments/environment';
import { AuthData } from './../components/auth/auth-data.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token!: string | null
  private tokenTimer!: any;
  private authStatusListener = new Subject<boolean>()

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }
  
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  constructor(
    private http: HttpClient,
    private router: Router) { }

  createUser(
    email: string,
    password: string)
    {
      const authData: AuthData = {
        email: email,
        password: password
    }
    
    this.http.post(environment.apiUrl + "user/signup", authData) 
      .subscribe(response => {
      console.log(response)
    })
       
  }

  login(
    email: string,
    password: string) {
      
    const authData:
      AuthData = {
      email: email,
      password: password
    }
    this.http.post<{ token: string, expiresIn: number }>(environment.apiUrl + "user/login", authData)
      .subscribe(response => {

      const token = response.token;
      this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + (expiresInDuration * 1000));
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate)
        this.router.navigate(['/'])
      } 
    })
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000)
      this.authStatusListener.next(true);
    }
    
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/']);
    
  }

  private setAuthTimer(duration: number) {
    console.log("setting timer" + duration)
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token)
    localStorage.setItem('expiration', expirationDate.toISOString())
  }
  
  private clearAuthData () {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");


  }
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return
    }
    else return {
      token: token,  
      expirationDate: new Date(expirationDate)
    }

  }
}
