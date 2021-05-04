import { Subscription, Observable, fromEventPattern } from 'rxjs';
import { PropertyService } from './../../shared/property.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  zoom = 19; 
  

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
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
  }
}

  
  // drawingManager = new google.maps.drawing.DrawingManager({
  //   drawingMode: google.maps.drawing.OverlayType.MARKER,
  //   drawingControl: true,
  //   drawingControlOptions: {
  //     position: google.maps.ControlPosition.TOP_CENTER,
  //     drawingModes: [
  //       google.maps.drawing.OverlayType.MARKER,
  //       google.maps.drawing.OverlayType.CIRCLE,
  //       google.maps.drawing.OverlayType.POLYGON,
  //       google.maps.drawing.OverlayType.POLYLINE,
  //       google.maps.drawing.OverlayType.RECTANGLE,
  //     ],
  //   },
  //   markerOptions: {
  //     icon:
  //       "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  //   },
  //   circleOptions: {
  //     fillColor: "#ffff00",
  //     fillOpacity: 1,
  //     strokeWeight: 5,
  //     clickable: false,
  //     editable: true,
  //     zIndex: 1,
  //   },
  // });


  

