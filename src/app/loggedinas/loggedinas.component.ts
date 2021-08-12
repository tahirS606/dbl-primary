import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loggedinas',
  templateUrl: './loggedinas.component.html',
  styleUrls: ['./loggedinas.component.css']
})
export class LoggedinasComponent implements OnInit, AfterViewInit {

  userId!: string; 
  userEmail!: string;
  userIsAuthenticated: boolean = false;  
  public authStatusSub!: Subscription;
  isLoading!: boolean; 
  authData!: {}
  
  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {

    this.userId = this.authService.getUserId();
    this.userEmail = this.authService.getUserEmail();

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
      this.userEmail = this.authService.getUserEmail();
    })
    this.isLoading = false;
  }

  ngAfterViewInit(){
    this.userId = this.authService.getUserId();
    this.userEmail = this.authService.getUserEmail();
  }

}
