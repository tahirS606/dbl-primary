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
  

  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.authService.login(form.value.email, form.value.password);
    this.router.navigateByUrl('/')
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    public authService: AuthService , 
    private router: Router,
    private domSanitizer: DomSanitizer,
    private socialAuthService: SocialAuthService
    
    
    ) {
      
    }

    

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.socialAuthService.signOut();
  }
}
