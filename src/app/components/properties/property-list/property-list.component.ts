import { PropertyService } from './../../services/property.service';
import { AuthService } from './../../auth/auth.service';
import { Property } from './../../../models/property.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'  ;
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit, OnDestroy {
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
  ) { }

  ngOnInit() {
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
    })
    this.isLoading = false;
  }

  // deleteWarn(propertyName: string){
  //   if(confirm("Are you sure to delete" + propertyName)
  //  }

  

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
