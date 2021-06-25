import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLoading = true;


  onSignup(form: NgForm) {
    if (form.invalid) {
      return
    }
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
  }

}
