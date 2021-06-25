import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { MyMaterialModule } from '../../../modules/material.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";


@Component({
  // omit if something will get loaded through routing
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  

  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.authService.login(form.value.email, form.value.password);
    this.router.navigateByUrl('/')
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    public authService: AuthService, 
    private router: Router,
    private domSanitizer: DomSanitizer,
    
    
    ) {
      this.matIconRegistry.addSvgIcon(
        "logo",
        this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    }

  ngOnInit(): void {
    
  }
}
