import { Component, OnInit } from '@angular/core';
import { ReportService } from './../../services/report.service';
import { PropertyService } from './../../services/property.service';
import { Report } from './../../models/report.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from './../../models/property.model';
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

  Object = Object;

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
  tasks: any

  // private geoCoder : any;

  zoomControl: boolean = false;

  // report features

  areasForReport: [{}] = [{}]
  // globalAreaObjects: [{}] = [{}]

  polyArrayLatLng: [{}] = [{}]

  // for collection name
  count: number = 0 
  reportSaved:boolean = false; 
  report!: Report;

  // idea: 'collections' added to report. 
  
  

  reportDate: any;
  reportTime: any; 
  reportSubmittedBy!: string; 
  atLeastOneAreaSaved: boolean = false; 

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
    // console.log(this.checkboxVisible)
  }

  constructor(
    private propertyService: PropertyService ,
    private route: ActivatedRoute,
    private router: Router,
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

    
    
      const allTasks = this.form.value.tasks.map((checked:Boolean, i:number) => (checked) ? this.webData[i].name
        : null);

        let tasks: [{}] = [{}]
        tasks.shift()
        
        // filters out null objects
        allTasks.map((task:string)=>{
          if (task !== null){
            tasks.push(task)
            this.checked = true
          }
        })

        this.count = this.count + 1
        const collectionName = 'Collection ' + this.count

        // const newCollection = new (Collection as any)(collectionName, this.globalAreaObjects, tasks)

        // this.areasForReport.push(newCollection)

        // console.log('new Collection', newCollection)

        // newCollection.name = collectionName 
        // newCollection.areas = this.globalAreaObjects
        // newCollection.tasks = tasks

        // console.log('new Collection', newCollection)

        // console.log('areas for report', this.areasForReport)
        
        
        // this.form.reset()
        // this.checked = false
        // this.globalAreaObjects = [{}]
        // this.globalAreaObjects.shift()
        // console.log(this.globalAreaObjects, 'after clear')

        function Collection(name: string, areas: [], tasks:[{}]) {
          name = name;
          areas = areas;
          tasks = tasks;
        }

        const newCollection = new (Collection as any)(collectionName, this.polyArrayLatLng, tasks)

        // console.log('new Collection', newCollection)

        newCollection.name = collectionName 
        newCollection.areas = this.polyArrayLatLng
        newCollection.tasks = tasks

        this.areasForReport.push(newCollection)

        // console.log('new Collection', newCollection)

        console.log('newCollection', newCollection)

        this.form.reset()
        this.checked = false
        this.polyArrayLatLng = [{}]
        this.polyArrayLatLng.shift()
        // this.globalAreaObjects = [{}]
        // this.globalAreaObjects.shift()

        console.log('this.areasForReport', this.areasForReport)
        
        }

        onSaveReport() {
            this.reportService.addReport(
              this.reportDate, 
              this.reportTime, 
              this.propertyId, 
              this.property.name,
              this.property.address,
              this.areasForReport
              )        

              this.form.reset();
              this.router.navigate(['/'])
              console.log(this.areasForReport)
          } 
          
    addTasks(){
      // console.log('add tasks clicked')
      this.checkboxVisible = true;
    }

    

  ngOnInit(): void {

    this.reportDate = this.date; 
    this.reportTime = this.reportDate.getHours() + ":" + this.reportDate.getMinutes()
    this.areasForReport.shift()
    // this.globalAreaObjects.shift()


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

//   public onClearButtonClicked() {
//     this.map.setMap(null);
// } doesn't work

  initDrawingManager(map:any) {

    let arrayOfAreaObjects:[{}]= [{}]
    arrayOfAreaObjects.shift()
    
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
    // let number = 0;
    const _self = this; 

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {

      // idea for label polygon

//       const bounds = new google.maps.LatLngBounds();

//       const polygonCenter = bounds.getCenter();
//       polygonCenter.label = "Hello world"

      _self.polygonComplete  = true; 

      const len = polygon.getPath().getLength();
      // let polyArrayLatLng = []
      
      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = {lat: vertex.lat(), lng: vertex.lng()};
        _self.polyArrayLatLng.push(vertexLatLng);
      }
  
      // the last point of polygon should be always the same as the first point
      _self.polyArrayLatLng.push(_self.polyArrayLatLng[0]);
      // number = number + 1 
      
      // let polygonName = 'Area ' + number
    
      // console.log('Area ', number, polyArrayLatLng);

      // let area = []

      // // area.push(polygonName)
      // area.push(polyArrayLatLng)

      // console.log('area', area)

// let areaObject = {name: '', area: [{}] }

      // areaObject.name = polygonName
      // areaObject.area = polyArrayLatLng
      
      // _self.globalAreaObjects = polyArrayLatLng

      // console.log('areaObject', _self.globalAreaObjects)
    });

    // console.log('global area objects after pass', this.globalAreaObjects)

  }

  clearArray(array:[]){
    array
  }

}
