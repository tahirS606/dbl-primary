import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub!: Subscription;


  onSignup(form: NgForm) {
    if (form.invalid) {
      return
    }

    this.isLoading = true; 
    this.authService.createUser(
      form.value.email, 
      form.value.password)

      this.router.navigateByUrl('user/login')
  }

  constructor(
    public authService: AuthService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus =>{
        this.isLoading = false; 
      }
    )
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe()
  }

}
