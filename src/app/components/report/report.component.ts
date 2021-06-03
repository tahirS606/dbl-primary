import { Report } from './../../models/report.model';
import { PropertyService } from './../services/property.service';

import { ReportService } from './../services/report.service';
import { Task } from './../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { Property } from './../../models/property.model';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';


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

 //=== report features ===//

  areasForReport: {}[] =[]


  // array of areas with tasks, collection names
  // collectionForReport = {name: collection 1, areas: [{area w, area 2}], tasks: []}
  collectionForReport:{entries: [{}]} = {entries: [{}]}
  
  count: number = 0 

  

  reportSaved:boolean = false; 
  report!: Report;
  
  

  reportDate: any;
  reportSubmittedBy!: string; 
  atLeastOneAreaSaved: boolean = false; 

  tasks: Task[] = []
  form!: FormGroup;
  date = new Date();

 

  checkboxVisible:boolean = false;

  addTasksButtonDisabled: boolean = true;
  taskCheckboxButtonDisabled: boolean = true;

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

    // supposed to clear map, https://stackoverflow.com/questions/59631485/how-to-clear-polygon-from-agm-map

    public onOverlayComplete(e: any) {
      this.map = e.overlay;
  }

  public onClearButtonClicked() {
      this.map.setMap(null);
  }

  // end clear map (doesn't work yet)

    addTaskstoArea() {


      this.tasks = []
     
      const allTasks = this.form.value.tasks.map((checked:Boolean, i:number) => (checked) ? this.webData[i].name
        : null);
      
        // filters out null objects
        allTasks.map((task:any)=>{
          if (task !== null){
            this.tasks.push(task)
          }
        })

        let areasWithTasks = {name: {}, areas: {}, tasks: [{}]}

        areasWithTasks.areas = this.areasForReport

        console.log('area added to areasWithTasks', areasWithTasks)

        areasWithTasks.tasks.push(this.tasks)

        console.log('after tasks added areasWithTasks', areasWithTasks)

        this.count = (this.count + 1)
        let collectionName = 'Collection ' + this.count.toString()
        areasWithTasks.name = collectionName
        console.log('areasWithTasks after tasks added', areasWithTasks)

        // this is what is not working, need to add to collection, another collection, then restart with the event object being cleared. ? 
        
        // this.collectionForReport = [{...this.collectionForReport, ...this.areasForReport}]

        this.collectionForReport.entries.push(areasWithTasks)


        // works first time through, second and 'area' is lost

        console.log('collectionForReport - Should be more than one', this.collectionForReport)

        // need to push areas to collection, and then reset areasForReport
        areasWithTasks = {name: {}, areas: {}, tasks: [{}]}

        
        this.form.reset()
        
        }

    saveReport(){
      // example of property save
      // if (this.form.invalid) {
      //   console.log('form is invalid');
      //   return;
      // }
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
      // console.log('add tasks clicked')
      this.checkboxVisible = true;
    }

    

  ngOnInit(): void {

    this.reportDate = this.date; 
    // console.log(this.reportDate)

    const fetchedTasks = this.reportService.getTasks().subscribe();

    // console.log('fetchedTasks', fetchedTasks)

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

  initDrawingManager(map:any) {

    const strokeColors = {
      red: 'red',
      blue: 'blue', 
      green: 'green',
      yellow: 'yellow'
    }

    // will 'randomly' cycle through a list of 16 or so colors (enough to never run out) upon new polygon creation

    let arrayOfAreaObjects:[{}]= [{}]
    
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

      number = number+1 
      let polygonName = 'Area ' + number    
      let areaArray = {name: '', area: [{}] }
      const areaObject = Object.create(areaArray)

      areaObject.name = polygonName
      areaObject.area = polyArrayLatLng
      
      arrayOfAreaObjects.push(areaObject)

      console.log('array of area objects', arrayOfAreaObjects)
      
    });

    this.areasForReport = arrayOfAreaObjects    
    console.log('array of area objects', arrayOfAreaObjects)

    // collects all area objects =>

    console.log('areas for report this.areasForReport', this.areasForReport)

  }

}
