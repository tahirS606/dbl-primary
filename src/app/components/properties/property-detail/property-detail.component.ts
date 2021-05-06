import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';
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

  constructor(private propertyService: PropertyService ,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    console.log(this.propertyId)
        this.propertyService
          .getProperty(this.propertyId)
          .subscribe((propertyData) => {
            this.property = {
              id: propertyData._id,
              name: propertyData.name,
              address: propertyData.address,
              latitude: propertyData.latitude, 
              longitude: propertyData.longitude
            };

            // console.log('this.property', this.property) 

    });
  }

}
