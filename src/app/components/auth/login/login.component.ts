import { MyMaterialModule } from '../../../modules/material.module';
import { Component, OnInit } from '@angular/core';

@Component({
  // omit if something will get loaded through routing
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
