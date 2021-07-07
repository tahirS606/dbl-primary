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
import { _MatSelectBase } from '@angular/material/select';

  declare const google: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  Object = Object;

  strokeColor: string = "#21b0ff"

  index: Number = 0

  strokeColorsArray: String[] = [
    "#740c9a", "#4e4ec4", "#21b0ff", "#aa52b4", "#ff218c", "#12b8da", "#49997c", "#027ab0", "#e51a1a", "#eed630" ]

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

  selectedShape: any
  selectedShapes: [{}] = [{}]
  polygonCount: number = 0;

  addTasksToAreaButtonShowing: boolean = false

  readyToSave: boolean = false

  // private geoCoder : any;

  zoomControl: boolean = false;

  // report features

  areasForReport: [{}] = [{}]

  polyArrayLatLng: [{}] = [{}]

  // for collection name
  count: number = 0 
  reportSaved:boolean = false; 
  report!: Report;

  // idea: 'collections' added to report. 
  
  
  reportData: any;

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

        function Collection(name: string, areas: [], tasks:[{}], time: Date) {
          name = name;
          areas = areas;
          tasks = tasks;
          time = time; 
        }

        const newCollection = new (Collection as any)(collectionName, this.polyArrayLatLng, tasks, this.date)


        newCollection.name = collectionName 
        newCollection.areas = this.polyArrayLatLng
        newCollection.tasks = tasks
        newCollection.time = this.date

        this.areasForReport.push(newCollection)

        this.readyToSave = true

        console.log('newCollection', newCollection)

        this.form.reset()
        this.checked = false
        this.polyArrayLatLng = [{}]
        this.polyArrayLatLng.shift()
    

        console.log('this.areasForReport', this.areasForReport)

        this.reportData = Object.values(this.areasForReport)
        console.log('this report data', this.reportData)
        
        }

        // https://stackoverflow.com/questions/5932710/changing-google-maps-polygon-color-fill-on-click

//         myPolygon.setOptions({strokeWeight: 2.0, fillColor: 'green'});
// // polygon is clicked
// myPolygon.setOptions({strokeWeight: 6.0});

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
      this.checkboxVisible = true;
      this.addTasksToAreaButtonShowing = false;
       
    }

    

  ngOnInit(): void {

    this.reportDate = this.date; 
    this.reportTime = this.reportDate.getHours() + ":" + this.reportDate.getMinutes()
    this.areasForReport.shift()
    this.selectedShapes.shift()


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

    let arrayOfAreaObjects:[{}]= [{}]
    arrayOfAreaObjects.shift()
    
    const options = {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon", "circle"], 
      },

      polygonOptions: {
        outline: false, 
        draggable: true,
        editable: true,
        fillColor: this.strokeColorsArray[this.count],
        fillOpacity: .20,
        strokeWeight: 7,
        strokeColor: this.strokeColorsArray[this.count],
        clickable: true,
        zIndex: 1,
        fullScreenControl: true, 
      },
    
    };
    

    const drawingManager = new google.maps.drawing.DrawingManager(options);

    drawingManager.setMap(map);
    const _self = this; 

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {

      _self.polygonCount +=1
      console.log('poly count', _self.polygonCount)

      _self.polygonComplete  = true; 
      _self.addTasksToAreaButtonShowing = true

      const len = polygon.getPath().getLength();
      
      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = {lat: vertex.lat(), lng: vertex.lng()};
        _self.polyArrayLatLng.push(vertexLatLng);
      }

      // works==>
      // polygon.setOptions({strokeColor: 'red', fillColor: 'green'});
  
      _self.polyArrayLatLng.push(_self.polyArrayLatLng[0]);

      _self.selectedShape = polygon
      _self.selectedShapes.push(polygon)
      console.log('selected shapes', _self.selectedShapes)

      // _self.selectedShape.setOptions({strokeColor: 'red', fillColor: 'green'});
      
    });


  }

}

// ideas: polygonCount to count polygons, selectedShapes, and then change style of those polygons that are in the collection. (1-3, for instance) / or change initial color based on count of polygons. this.count. By having htat be the index. But it only goes to the first one, doesn't change. 