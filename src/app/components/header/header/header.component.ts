import { Subscription } from 'rxjs';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated:boolean = false;
  private authListenerSubs!: Subscription;

  constructor(private authService: AuthService) {
  }

  authData!: {} 

  // private token: string;

  ngOnInit() {
    // ensures auth info is accessed before header is loaded. 
    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })

  }

  onLogout() {
    this.authService.logout()
    
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
