import { PropertyService } from './../../shared/property.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: "./map.component.html",
  styleUrls:  ["./map.component.css"]
  
})
  
export class MapComponent implements OnInit {

 
  latitude!: number; 
  longitude!: number; 
  propertyId!: any; 
  property: any;
  zoom = 19; 
  

  constructor(
    public propertyService: PropertyService,
    public route: ActivatedRoute 
    ) {
  }
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

          console.log('this.property', this.property) 
          console.log(this.property.latitude)

          this.latitude = this.property.latitude;
          this.longitude = this.property.longitude; 

  })
    
  }
}
