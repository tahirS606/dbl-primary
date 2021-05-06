
import { PropertyService } from './../../shared/property.service';
import { ActivatedRoute } from '@angular/router';
import { 
  Component, 
  Input, 
  OnInit, 
  Output, 
} from '@angular/core';
import { PolygonManager, MapsAPILoader } from '@agm/core';


declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: "./map.component.html",
  styleUrls:  ["./map.component.css"]

})

  
export class MapComponent implements OnInit{

  @Input()
  map: any; 
   
  latitude!: number; 
  longitude!: number; 
  propertyId!: any; 

  @Output() property: any;

  // map features
  zoom = 19; 
  minZoom = 18;
  maxZoom = 19; 
  disableDefaultUI: boolean = true;
  fullscreenControl: boolean = true; 
  rotateControl: boolean = true;
  scaleControl: boolean = false;
  streetViewControl: boolean = false;

  zoomControl: boolean = false;

  // report features

  polygonCoords:[]=[]

  constructor(
    // private polygonManager: PolygonManager,
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

  mapClicked(){
    console.log('clicked map')
  }

 overlayComplete(overlay:any){
   console.log('overlay', overlay)
  console.log('button clicked')
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
        clickable: true,
        zIndex: 1,
        fullScreenControl: true, 
  
      },
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    
    drawingManager.setMap(map);
  }

  markerDragEnd($event: google.maps.MouseEvent) {
    console.log($event);
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
  }

}


  // onPolygonComplete($event){
  //   (e:any)=>{
  //     console.log('polygon complete')
  //     console.log('shape coords', e)
  //     alert($event.overlay.getPath().getArray());   
  //   }

  

  // @Output() polygonComplete = new EventEmitter<google.maps.Polygon>();

  // google.maps.event.addListener(drawingManager, 'polygonComplete', (event:any) => {          
  //   if (event.type === google.maps.drawing.OverlayType.POLYGON) {                
  //     alert(event.overlay.getPath().getArray());       }     }; 

 


