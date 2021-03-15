import { PropertyService } from '../../../shared/property.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any[];
  constructor(private PropertyService: PropertyService) {
    this.properties = this.PropertyService.getProperties();
  }

  ngOnInit(): void {}

  handleThumbnailClick(eventName: string) {
    console.log(eventName);
  }
}
