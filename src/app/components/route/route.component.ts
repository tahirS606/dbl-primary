import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { PropertyService } from './../../services/property.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Property } from './../../models/property.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit, OnDestroy{

  selectedRoute!: any 

  private propertiesSub!: Subscription;
  private authStatusSub!: Subscription;
  properties: Property[] = [];
  totalPropertiesCount = 0;
  propertiesPerPage = 10;
  pageSizeOptions = [5, 10, 25, 50];
  currentPage = 1;
  isLoading: boolean = true;
  totalProperties!: number;
  userIsAuthenticated = false;

  accordianIsOpen!:boolean;

  constructor(
    public propertyService: PropertyService,
    private authService: AuthService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {

    this.selectedRoute = this.route.snapshot.paramMap.get('route');
    console.log(this.selectedRoute)

    this.isLoading = true;
    this.propertyService.getProperties(
      this.propertiesPerPage,
      this.currentPage
    );
    this.propertiesSub = this.propertyService
      .getPropertyUpdateListener()
      .subscribe(
        (propertyData: { properties: Property[]; propertiesCount: number }) => {
          this.isLoading = false;
          this.totalProperties = propertyData.propertiesCount;
          this.properties = propertyData.properties;
        }
    );
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      console.log('user aut', this.userIsAuthenticated)
    })
    this.isLoading = false;

  }


  onDelete(propertyId: string) {
    this.isLoading = true;
    this.propertyService.deleteProperty(propertyId).subscribe(() => {
      this.propertyService.getProperties(
        this.propertiesPerPage,
        this.currentPage
      );
      console.log(this.propertiesPerPage);
      console.log(this.currentPage);
      this.isLoading = false;
    });
  }

  onPageChange(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.propertiesPerPage = pageData.pageSize;
    this.propertyService.getProperties(
      this.propertiesPerPage,
      this.currentPage
    );
    this.isLoading = false;
  }

  ngOnDestroy() {
    this.propertiesSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

  handleThumbnailClick(eventName: string) {
    console.log(eventName);
  }
}