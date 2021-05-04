import { Subscription, Observable, fromEventPattern } from 'rxjs';
import { PropertyService } from './../../shared/property.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

declare const google: any;

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

  // map features
  zoom = 19; 
  minZoom = 18;
  maxZoom = 19; 


  constructor(
    public propertyService: PropertyService,
    public route: ActivatedRoute,
   
    ) {
  }

  ngOnInit() {

 
    // get property id from url
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
  
   onMapReady(map:any) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      disableDefaultUI: true, 
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true,
        fillColor: "#ffff00",
      fillOpacity: .25,
      strokeWeight: 5,
      strokeColor: 'red',
      clickable: false,
      zIndex: 1,
      fullScreenControl: true, 
  
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
  }
  

  onShapeComplete(event:any){
    console.log('shape complete')
  }

}




  

