import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated:boolean = false;
  private authListenerSubs!: Subscription;

  @Input() clientView!: boolean;

  private userEmailSub!: Subscription;

  constructor(private authService: AuthService) {
  }

  authData!: {} 


  ngOnInit() {

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
