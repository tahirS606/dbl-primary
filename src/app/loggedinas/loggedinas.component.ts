import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-loggedinas',
  templateUrl: './loggedinas.component.html',
  styleUrls: ['./loggedinas.component.css']
})
export class LoggedinasComponent implements OnInit {

  userId!: string; 
  userEmail!: Subscription
  userIsAuthenticated: boolean = false;  
  public authStatusSub!: Subscription;
  isLoading!: boolean; 
  authData!: any;
  userEmailSub: any;
  token: any; 
  localStorage: any; 
  user!: any;
  
  constructor(
    private authService: AuthService) { }

  ngOnInit() {

    this.localStorage = this.allStorage()
    console.log('local storage', this.localStorage);
    console.log('this auth data', this.authData);

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
      
    })

    this.isLoading = false;

  }


  allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

}
