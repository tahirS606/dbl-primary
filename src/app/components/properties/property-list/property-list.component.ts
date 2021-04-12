import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit, OnDestroy {
  private propertiesSub!: Subscription;
  properties: Property[] = [];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.getProperties();
    this.propertiesSub = this.propertyService
      .getPropertyUpdateListener()
      .subscribe((properties: Property[]) => {
        this.properties = properties;
      });
  }

  ngOnDestroy() {
    this.propertiesSub.unsubscribe();
  }

  handleThumbnailClick(eventName: string) {
    console.log(eventName);
  }
}
