import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../services/property.service';

import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  @Input() property!: Property; 
  propertyId!: any;

  checkProperty(property:Property){
    property = this.property
  }

  constructor(
    private propertyService: PropertyService ,
    private route: ActivatedRoute 
    ) { }

  ngOnInit() {

    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    
        this.propertyService
          .getProperty(this.propertyId)
          .subscribe((propertyData) => {
            this.property = {
              id: propertyData._id,
              name: propertyData.name,
              address: propertyData.address,
              route: propertyData.route, 
              latitude: propertyData.latitude, 
              longitude: propertyData.longitude
            };
    });
  }
}
