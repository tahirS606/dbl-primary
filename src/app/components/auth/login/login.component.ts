import { SocialUser, SocialAuthService, GoogleLoginProvider, } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  isSignedin!: boolean;  
  

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
    
    ) {}

    

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  googleSignin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['/'])
    
  }

  logout() {
    this.socialAuthService.signOut();
  }
}
