import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { PropertyService } from './../../services/property.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  
  properties?: Property[]
  selectedRoute!: any;
  userIsAuthenticated:boolean = false; 

  isLoading: boolean = true;
  private authStatusSub!: Subscription;

  constructor(
    private propertyService : PropertyService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService) 
    {}


  ngOnInit(): void {
    this.selectedRoute = this.route.snapshot.paramMap.get('route')
    
    this.propertyService.getPropertiesByRoute(this.selectedRoute).subscribe((response)=>{
      console.log(response)
    })

    console.log('this.selectedRoute', this.selectedRoute)

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
    this.isLoading = false;
    };

    onDelete(propertyId: string) {
      this.isLoading = true;
      this.propertyService.deleteProperty(propertyId).subscribe(() => {
        this.isLoading = false;
      });
  
    }
    
}


