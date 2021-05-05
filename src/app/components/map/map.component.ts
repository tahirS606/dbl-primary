import { Subscription, Observable, fromEventPattern } from 'rxjs';
import { PropertyService } from './../../shared/property.service';
import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  disableDefaultUI: boolean = true;
  fullscreenControl: boolean = true; 
  rotateControl: boolean = true;
  scaleControl: boolean = false;

  // report features

  polygonCoords:[]=[]

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
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: false,
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
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
  }

  onPolygonComplete($event:any){
    (e:any)=>{
      console.log('polygon complete')
      console.log('shape coords', e)
      alert($event.overlay.getPath().getArray());   
    }

  }

  @Output() polygonComplete = new EventEmitter<google.maps.Polygon>();


  // @Output() 
  
  // polygonComplete = new EventEmitter<google.maps.Polygon>().subscribe()
  //   console.log
  // };


  

  onShapeComplete(event:any){
    console.log('shape complete')
  }

  // google.maps.event.addListener(drawingManager, 'polygonComplete', (event:any) => {          
  //   if (event.type === google.maps.drawing.OverlayType.POLYGON) {                
  //     alert(event.overlay.getPath().getArray());       }     }; 



}


  

