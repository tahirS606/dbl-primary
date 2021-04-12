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
  totalPropertiesQuant = 10;
  propertiesPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  currentPage = 1;

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.getProperties(
      this.propertiesPerPage,
      this.currentPage
    );
    this.propertiesSub = this.propertyService
      .getPropertyUpdateListener()
      .subscribe((properties: Property[]) => {
        this.properties = properties;
      });
  }

  onPageChange(pageData: PageEvent) {
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
