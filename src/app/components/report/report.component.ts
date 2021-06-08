import { Task } from './../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Property } from './../../models/property.model';
import { PropertyService } from './../../services/property.service';
import { ReportService } from './../../services/report.service';
import { Report } from './../../models/report.model';

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
  polygonComplete: boolean = false; 

 //=== report features ===//
  areasForReport: {}[] =[{}]
  collectionCounter!: number; 
  resetCount!: number; 
  areaObjectsGlobal:[{}] = [{}]

  areasWithTasksLength!: number

  collectionForReport :[{}] =[{}]

  collectionCount:number = this.collectionForReport.length
  
  // for naming
  count!: number; 

  reportSaved:boolean = false; 
  report!: Report;

  reportDate: any;
  reportSubmittedBy!: string; 

  tasks: [{}] = [{}]
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

      this.areasWithTasksLength = 0
     
      const allTasks = this.form.value.tasks.map((checked:Boolean, i:number) => (checked) ? this.webData[i].name
        : null);
      
        // filters out null objects
        allTasks.map((task:any)=>{
          if (task !== null){
            this.tasks.push(task)
          }
        })

        let areasWithTasks = {name: '', areas: [{}], tasks: [{}]}
        console.log('areas for report before adding tasks', this.areasForReport)

        areasWithTasks.areas.push(this.areasForReport)
        // this.areasForReport = []

        console.log('area added to areasWithTasks', areasWithTasks)

        areasWithTasks.tasks.push(this.tasks)

        this.areasWithTasksLength = areasWithTasks.tasks.length

        console.log('after tasks added areasWithTasks', areasWithTasks)

      // working, now except areas keep stacking, even when new tasks added

        this.collectionForReport.push(areasWithTasks)
        this.collectionCount = this.collectionCount + 1

        let collectionName = 'Collection ' + this.collectionCount.toString()
        areasWithTasks.name = collectionName
        console.log('areasWithTasks after tasks added', areasWithTasks)

        // works now, except areas keep adding up. !!!
        console.log('collectionForReport - Should be more than one', this.collectionForReport)

        // so first will have a b, second will have abc, third will have abcd. 

        this.form.reset()
        
        }

    saveReport(){
    
    }

    addTasks(){
      // console.log('add tasks clicked')
      this.checkboxVisible = true;
    }

  ngOnInit(): void {

    this.collectionForReport.shift()

    this.collectionCount = 0
    this.resetCount = 0

    this.reportDate = this.date; 

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

            console.log('this.property', this.property)

          this.latitude = this.property.latitude;
          this.longitude = this.property.longitude; 

          console.log(this.latitude, this.longitude)
    });
  }

   onMapReady(map:any) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map:any) {

    const strokeColors = {
      red: 'red',
      blue: '#99EEFF', 
      green: '#008080',
      yellow: 'yellow',
      lavender: "#C5C5FF",
    }

    // plan: will 'randomly' cycle through a list of 16 or so colors (enough to never run out) upon new polygon creation

    let areaObjects : [{}] = [{}];
    areaObjects.shift()
    
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
        strokeColor: '#99EEFF',
        clickable: true,
        zIndex: 1,
        fullScreenControl: true, 
      },
    
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    
    drawingManager.setMap(map);
    
    let number = 0;

    // how to access .this within event below. 
    
    // this.x = 0;
    // this.y = 0;
    // var _self = this;

    // _self.x = event.pageX;     // Is now able to access Map's member variable "x"
    //     _self.y = event.pageY; 
    
    this.polygonComplete = false
    const _self = this; 

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {

      _self.polygonComplete  = true; 
      _self.collectionCount
      console.log('collection count', _self.collectionCount)
      

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
      let areaArray = {name: '', area: [] }
      const areaObject = Object.create(areaArray)
      areaObject.area.shift()
      areaObject.name = polygonName
      areaObject.area = polyArrayLatLng
      console.log('area object', areaObject)  
      areaObjects.push(areaObject)
      console.log('array of area objects after push of area Object', areaObjects)
    });

    this.areaObjectsGlobal.push(areaObjects)
    console.log('making global collections for report', this.areaObjectsGlobal)

  }
}