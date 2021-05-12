
import { MouseEvent } from '@agm/core';
import { ReportService } from './../services/report.service';
import { Task } from './../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from './../../shared/property.service';
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

  areaObjectsArray:[] = []



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


  

  constructor(private propertyService: PropertyService,
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

    submitTasks() {
      const selectedTasks = this.form.value.tasks
        .map((checked:Boolean, i:number) => checked ? this.webData[i].id : null)
        // .filter(task => task !== null);
      console.log(selectedTasks);

    }

    saveReport(){



    }

    addTasks(){
      console.log('add tasks clicked')
      this.checkboxVisible = true;
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


   onMapReady(map:any) {
    this.initDrawingManager(map);
    
  }

  initDrawingManager(map: any) {

    const arrayOfAreaObjects:[{}]= [{name: '', area: [{}]}]
    
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
        strokeColor: 'red',
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
  
      // the last point of polygon should be always the same as the first point (math rule)
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
      // still only adds one
      console.log(arrayOfAreaObjects)

    });
  }
}
