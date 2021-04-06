import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-list',
  template: ` <H1>Properties</H1>

    <!-- <div>loading...</div> -->

    <div *ngFor="let property of properties">
      <app-property-thumbnail
        *ngIf="properties"
        (click)="handleThumbnailClick(property.name)"
        [property]="property"
      ></app-property-thumbnail>
      <div *ngIf="properties.length === 0">
        <h2>please add or search for properties</h2>
      </div>
    </div>`,
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
