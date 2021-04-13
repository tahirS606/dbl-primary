import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';

import { Component, OnInit, OnDestroy } from '@angular/core';

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

  // private token: string;

  ngOnInit() {
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      // console.log(isAuthenticated)
    })

  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
