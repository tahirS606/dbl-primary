import { Subscription } from 'rxjs';
import { AuthService } from './../../../services/auth.service';
import { SocialUser, SocialAuthService, GoogleLoginProvider, } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  user!: SocialUser;
  isSignedin!: boolean;  
  isLoading = false
  private authStatusSub!: Subscription
  

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService
    
    ) {}

    

  ngOnInit(): void {

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false
      }
    )

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

  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.authService.login(form.value.email, form.value.password);
    this.router.navigateByUrl('/')
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();

  }
}
