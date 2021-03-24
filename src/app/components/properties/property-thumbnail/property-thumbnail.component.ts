import { PropertyService } from './../../../shared/property.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-thumbnail',
  templateUrl: './property-thumbnail.component.html',
  styleUrls: ['./property-thumbnail.component.css'],
})
export class PropertyThumbnailComponent {
  @Input() property: any = [];
  constructor(private propertyService: PropertyService) {}

  onDelete(propertyId: string) {
    this.propertyService.deleteProperty(propertyId);
  }
}
