import { MouseEvent } from '@agm/core';
import { ReportService } from './../services/report.service';
import { Task } from './../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from './../../shared/property.service';
import { Property } from './../../models/property.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,} from '@angular/forms';

  declare const google: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  // map

  map: any; 
  latitude!: number; 
  longitude!: number; 
  property!: Property;
  propertyId!: any; 
  address: any;

  // map features
  zoom = 19; 
  minZoom = 18;
  maxZoom = 19; 
  disableDefaultUI: boolean = true;
  fullscreenControl: boolean = true; 
  rotateControl: boolean = true;
  scaleControl: boolean = false;
  streetViewControl: boolean = false;

  private geoCoder : any;

  zoomControl: boolean = false;

  // report features

  polygonCoords:[]=[]

  tasks: Task[] = []
  form!: FormGroup;
  date = new Date()

  webData = [
    { id: 1, name: 'Raking' },
    { id: 2, name: 'Mowing' },
    { id: 3, name: 'Weeding' },
    { id: 4, name: 'Blowing' },
    { id: 5, name: 'Trimming' }
  ];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }


  

  constructor(private propertyService: PropertyService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public reportService: ReportService,
    ) { 
      this.form = this.formBuilder.group({
        orders: new FormArray([])
      });
      this.addCheckboxesToForm();
    }

    private addCheckboxesToForm() {
      this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
    }

    submit() {
      const selectedOrderIds = this.form.value.orders
        .map((checked:Boolean, i:number) => checked ? this.webData[i].id : null)
        // .filter(v => v !== null);
      console.log(selectedOrderIds);
    }

  ngOnInit(): void {

    const fetchedTasks = this.reportService.getTasks().subscribe()

    console.log('fetchedTasks', fetchedTasks)

    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    
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

            this.latitude = this.property.latitude;
          this.longitude = this.property.longitude; 

    });
    
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
        clickable: true,
        zIndex: 1,
        fullScreenControl: true, 
  
      },
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    
    drawingManager.setMap(map);
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lat;
  }


  // https://stackoverflow.com/questions/54650666/how-to-draw-polygon-on-angular-google-maps-using-agm-core

  // explains like this: 

  // google.maps.event.addListener(drawingManager, 'overlaycomplete', (event: any) => {       
  //   // Polygon drawn       
  //   if (event.type === google.maps.drawing.OverlayType.POLYGON) {         //this is the coordinate, you can assign it to a variable or pass into another function. 
  //             alert(event.overlay.getPath().getArray());       }     
}
