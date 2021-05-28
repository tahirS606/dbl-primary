import { Report } from './../../models/report.model';
import { PropertyService } from './../services/property.service';

import { MouseEvent } from '@agm/core';
import { ReportService } from './../services/report.service';
import { Task } from './../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';
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

  map: any; 
  latitude!: number; 
  longitude!: number; 
  property!: Property;
  propertyId!: any; 
  address: any;

  // map features
  zoom = 21; 
  minZoom = 18;
  maxZoom = 23; 
  disableDefaultUI: boolean = true;
  fullscreenControl: boolean = true; 
  rotateControl: boolean = true;
  scaleControl: boolean = false;
  streetViewControl: boolean = false;

  // private geoCoder : any;

  zoomControl: boolean = false;

  // report features

  areaObjectsArray!:[];
  reportSaved:boolean = false; 
  report!: Report;

  reportDate: any;
  reportSubmittedBy!: string; 

  tasks: Task[] = []
  form!: FormGroup;
  date = new Date();
  areaWithTasks: [] = [];
  checkboxVisible:boolean = false;

  webData = [
    { id: 1, name: 'Raking' },
    { id: 2, name: 'Mowing' },
    { id: 3, name: 'Weeding' },
    { id: 4, name: 'Blowing' },
    { id: 5, name: 'Trimming' }
  ];

  get tasksArray() {
    return this.form.controls.tasks as FormArray;
  }

  showCheckbox(){
    this.checkboxVisible = false; 
    console.log(this.checkboxVisible)
  }

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public reportService: ReportService,
    ) { 
      this.form = this.formBuilder.group({
        tasks: new FormArray([])
      });
      this.addCheckboxesToForm();
    }

    private addCheckboxesToForm() {
      this.webData.forEach(() => this.tasksArray.push(new FormControl(false)));
    }

    addTaskstoArea() {

      const allTasks = this.form.value.tasks
        .map((checked:Boolean, i:number) => checked ? this.webData[i].name: null);
        console.log(allTasks)
        return allTasks
        
    }


    saveReport(){
      // example of property save
      if (this.form.invalid) {
        console.log('form is invalid');
        return;
      }
      // else {
      //   this.reportService.addReport(
          // example
          // if (this.form.invalid) {
          //   console.log('form is invalid');
          //   return;
          // }
          // if (this.addMode) {
          //   this.propertyService.addProperty(
          //     this.form.value.name,
          //     this.address, 
          //     this.form.value.route, 
          //     this.latitude, 
          //     this.longitude)        
          //   ;
          // } else {
          //   this.propertyService.updateProperty(
          //     this.propertyId,
          //     this.form.value.name,
          //     this.form.value.address,
          //     this.form.value.route, 
          //     this.latitude, 
          //     this.longitude
          //   );
          // }

    // }
        
    }
    addTasks(){
      console.log('add tasks clicked')
      this.checkboxVisible = true;

    }

    

  ngOnInit(): void {

    this.reportDate = this.date; 
    console.log(this.reportDate)

    const fetchedTasks = this.reportService.getTasks().subscribe();

    console.log('fetchedTasks', fetchedTasks)

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

            this.latitude = this.property.latitude;
          this.longitude = this.property.longitude; 

    });
    
  }

   onMapReady(map:any) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {

    const arrayOfAreaObjects:[{}]= [{}]

    const options = {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        outline: true, 
        draggable: true,
        editable: true,
        fillColor: "#ffff00",
        fillOpacity: .25,
        strokeWeight: 5,
        strokeColor: 'blue',
        clickable: true,
        zIndex: 1,
        fullScreenControl: true, 
      },
    
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    
    drawingManager.setMap(map);
    let number = 0;

    

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {
      const len = polygon.getPath().getLength();
      const polyArrayLatLng = [];
      
      
      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = {lat: vertex.lat(), lng: vertex.lng()};
        polyArrayLatLng.push(vertexLatLng);
      }
  
      // the last point of polygon should be always the same as the first point
      polyArrayLatLng.push(polyArrayLatLng[0]);
      
      console.log('polygon Complete')
      number = number+1 
      let polygonName = 'Area ' + number
    
      console.log('Area ', number, polyArrayLatLng);

      console.log(polygonName.toString())

      let area = []

      area.push(polygonName)
      area.push(polyArrayLatLng)
      console.log(area)

      let areaObject = {name: '', area: [{}] }

      areaObject.name = polygonName
      areaObject.area = polyArrayLatLng

      console.log(areaObject)
      arrayOfAreaObjects.push(areaObject)
      
      console.log('arrayareaofObjects', arrayOfAreaObjects)



    });
  }
}
