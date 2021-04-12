import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit, OnDestroy {
  private propertiesSub!: Subscription;
  properties: Property[] = [];
  totalPropertiesCount = 0;
  propertiesPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  currentPage = 1;
  isLoading: boolean = true;
  totalProperties!: number;

  constructor(public propertyService: PropertyService) {}

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
  }

  ngOnDestroy() {
    this.propertiesSub.unsubscribe();
  }

  handleThumbnailClick(eventName: string) {
    console.log(eventName);
  }
}
