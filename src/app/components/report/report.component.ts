import { ReportService } from './../../services/report.service';
import { PropertyService } from './../../services/property.service';
import { Report } from './../../models/report.model';

import { ActivatedRoute } from '@angular/router';
import { Property } from './../../models/property.model';
import { Component, ComponentFactoryResolver, OnInit, Output } from '@angular/core';
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
  polygonComplete: boolean = false; 
  checked: boolean = false

  // private geoCoder : any;

  zoomControl: boolean = false;

  // report features

  areasForReport: [{}] = [{}]
  arrayOfAreaObjects!: [{}] 
  areasWithTasks!: [{}]
  globalAreaObjects: [{}] = [{}]

  count: number = 0 


  reportSaved:boolean = false; 
  report!: Report;

  // idea: 'collections' added to report. 
  
  

  reportDate: any;
  reportSubmittedBy!: string; 
  atLeastOneAreaSaved: boolean = false; 

  tasks!: []
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
    private propertyService: PropertyService ,
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

    showSubmitTaskButton(){
      this.checked = true
    }

    
    addTaskstoArea() {

      function Collection(name: string, areas: [{}], tasks:[]) {
        name = name;
        areas = areas;
        tasks = tasks;
      }
      
      // let collection:{name: string, areas:[{}], tasks:[]}  ={name: '', areas:[{}], tasks:[]}  


      const allTasks = this.form.value.tasks.map((checked:Boolean, i:number) => (checked) ? this.webData[i].name
        : null);

        let tasks: [{}] =[{}]
        
        // filters out null objects
        allTasks.map((task:any)=>{
          if (task !== null){
            tasks.push(task)
            
          }
        })

        this.showSubmitTaskButton()

        // tasks.shift()

        console.log('tasks', tasks)

        this.count = this.count + 1
        const collectionName = 'Collection ' + this.count

        const newCollection = new (Collection as any)(collectionName, this.globalAreaObjects, tasks)

        this.areasForReport.push(newCollection)

        console.log('new Collection', newCollection)

        newCollection.name = collectionName 
        newCollection.areas = this.globalAreaObjects
        newCollection.tasks = tasks

        console.log('new Collection', newCollection)

        console.log('areas for report', this.areasForReport)

        this.form.reset()
        

        }

    saveReport(){
      // example of property save
      if (this.form.invalid) {
        console.log('form is invalid');
        return;
      }
      
        
    }
    addTasks(){
      console.log('add tasks clicked')
      this.checkboxVisible = true;
    }

    

  ngOnInit(): void {

    this.reportDate = this.date; 
    console.log(this.reportDate)
    this.areasForReport.shift()

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

  public onClearButtonClicked() {
    this.map.setMap(null);
}


  initDrawingManager(map:any) {

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
    const _self = this; 

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {

      _self.polygonComplete  = true; 

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
    
      console.log('Area ', number, polyArrayLatLng);

      let area = []

      area.push(polygonName)
      area.push(polyArrayLatLng)

      let areaObject = {name: '', area: [{}] }

      areaObject.name = polygonName
      areaObject.area = polyArrayLatLng
      
      arrayOfAreaObjects.push(areaObject)

      console.log('areaObject', areaObject)

    });

    // collects all area objects =>
    this.globalAreaObjects.push(arrayOfAreaObjects)
    console.log('areas for report', this.globalAreaObjects)

  }

}
