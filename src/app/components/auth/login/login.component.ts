import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { MyMaterialModule } from '../../../modules/material.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  // omit if something will get loaded through routing
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = true;


  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.authService.login(form.value.email, form.value.password);
    this.isLoading = false;
    this.router.navigateByUrl('/')
  }

  constructor(
    public authService: AuthService, 
    private router: Router) {}

  ngOnInit(): void {}
}
