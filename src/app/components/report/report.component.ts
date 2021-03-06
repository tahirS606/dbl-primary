import { AlertsService } from './../../services/alerts.service';
import { ImageUploadService } from './../../services/image-upload.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileUploaderOptions  } from 'ng2-file-upload';

import { Observable } from 'rxjs';

import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import { ReportService } from './../../services/report.service';
import { PropertyService } from './../../services/property.service';
import { Report } from './../../models/report.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from './../../models/property.model';
import { 
  FormArray,
  FormBuilder,  
  FormControl,
  FormGroup,
  } from '@angular/forms';
  
import { _MatSelectBase } from '@angular/material/select';


import { Image } from 'src/app/models/image.model';


  declare const google: any;

  const BACKEND_URL= environment.apiUrl


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})

export class ReportComponent implements OnInit, AfterViewInit {

  checkedTemplate: any; 
  isOpen = false;
 
  isOpenChange($event: boolean) {
    this.isOpen = $event;
  }


  Object = Object;
  strokeColor: string = "#21b0ff"
  index: Number = 0
  uploader!: FileUploader;

  strokeColorsArray: String[] = [
    "#708F4F", "#70C8CF", "#EFCD42", "#D1AD93", "#1E9DD8", "#CFDF6D" ]

  userLocation!: any
  @Input()
  responses!: Array<any>;

  private selectedImage: any; 
  compressedImage!: Observable<any>;

  loading: boolean = true; 
  
  imagePath!: any;

  map: any; 
  latitude!: number; 
  longitude!: number; 
  property!: Property;
  propertyId!: any; 
  address: any;
  creator!: string; 
  mapZoom!: number; 
  initialColor: string = "white";
  shape: any; 
  imagePreview!: string;
  distance: number = 0

  image!: FormControl;
  
  imageFileArray: []= [];
  imagePreviewArray: string[] = [];
  userOnsite: boolean = false; 
  userEmail: string = '';

  polyCount: number = 0

  drawingControl: boolean = true; 

  // map features
  @Input() zoom = 21; 
  @Output() zoomChange!: number
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
  selectedShapes: {}[] = []
  drawingModes: [string] = ["polygon"]
  addTasksToAreaButtonShowing: boolean = false
  readyToSave: boolean = false
  zoomControl: boolean = false;
  userLongitude: number = 0
  userLatitude: number = 0

  // report features
  areasForReport: [{}] = [{}]
  polygons: [{}] = [{}]

  // for collection name
  count: number = 0 
  reportSaved:boolean = false; 
  report!: Report;
  reportData: any;
  reportDate: any;
  reportTime: any; 
  atLeastOneAreaSaved: boolean = false; 

  form!: FormGroup;
  imageForm!: FormGroup; 

  date = new Date();
  checkboxVisible:boolean = false;
  addTasksButtonDisabled: boolean = true;

  @Input() currentCollectionName: string = '';

  webData = [
    { id: 1, name: 'Raking' },
    { id: 2, name: 'Mowing' },
    { id: 3, name: 'Weeding' },
    { id: 4, name: 'Blowing' },
    { id: 5, name: 'Trimming' },
  ];

  get tasksArray() {
    return this.form.controls.tasks as FormArray;
  }

  showCheckbox(){
    this.checkboxVisible = false; 
  }
  
  constructor(
   
    private propertyService: PropertyService ,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public reportService: ReportService,
    public alertsService: AlertsService, 
    
    private http: HttpClient, 
    
    ) { 
      this.form = this.formBuilder.group({
        tasks: new FormArray([])
      });
      this.addCheckboxesToForm(); 

      this.responses = [];
    // this.title = '';
    }

    ngAfterViewInit(){}

    reportSavedAlert(){
      this.alertsService.reportSavedAlert()
    }

    

    ngOnInit(){
      
      this.findMe();

      this.polygons.shift();
      this.userOnsite = false; 
      this.reportDate = this.date; 
      this.reportTime = this.date;
      this.areasForReport.shift();
      this.selectedShapes.shift();
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

    private addCheckboxesToForm() {
      this.webData.forEach(() => this.tasksArray.push(new FormControl(false)));
    }

    getCollectionNameFromButton(collectionName: string) {
      this.currentCollectionName = collectionName; 
      console.log(this.currentCollectionName)
    }

 

    addTaskstoArea() {

      const allTasks = this.form.value.tasks.map((checked:Boolean, i:number) => (checked) ? this.webData[i].name
        : null);

        let tasks: [{}] = [{}]
        tasks.shift()
        
        allTasks.map((task:string)=>{
          if (task !== null){
            tasks.push(task)
            this.checked = true
          }
        })

        this.count = this.count + 1
        const collectionName = 'Collection ' + this.count
        let imagePaths: [] = []
        let imagePreviews: []= []

        function Collection(name: string, polygons: [], tasks:[{}], time: Date, selectedShapes:[{}], color: String, imagePreviews:[], imagePaths:[]) {
          name = name;
          polygons = polygons;
          tasks = tasks;
          time = time; 
          selectedShapes = selectedShapes; 
          color = color; 
          imagePreviews= imagePreviews; 
          imagePaths= imagePaths
        }

       

        const newCollection = new (Collection as any)(collectionName, this.polygons, tasks, this.date, imagePreviews, imagePaths)

        newCollection.name = collectionName 
        newCollection.polygons = this.polygons
        newCollection.tasks = tasks
        newCollection.time = new Date()
        newCollection.color = this.strokeColorsArray[this.count]
        newCollection.imagePreviews = []
        newCollection.imagePaths = []

        this.selectedShapes.forEach((shape: any)=>{ shape.setOptions({strokeColor: this.strokeColorsArray[this.count], fillColor: 'white'})})

        this.areasForReport.push(newCollection);
        this.readyToSave = true;
        this.form.reset();
        this.checked = false;
        this.polygons = [{}];
        this.polygons.shift();
        this.selectedShapes = [];
        this.selectedShapes.shift();
        this.mapZoom = this.zoom;
        this.reportData = Object.values(this.areasForReport);
        this.areasForReport = this.reportData;
        
        }

        onSaveReport() {

          this.areasForReport.forEach((area:any)=>{
            area.imagePreviews = [];

            console.log('this.imagePreviews', area.imagePreviews)
          })

          console.log('this.areasForReport', this.areasForReport)


            this.reportService.addReport(
              this.reportDate, 
              this.reportTime, 
              this.propertyId, 
              this.property.name,
              this.property.address,
              this.property.longitude, 
              this.property.latitude, 
              this.areasForReport,
              this.creator, 
              this.mapZoom,

              )        
              
              this.router.navigate(['/'])
              this.form.reset();
              this.readyToSave = false;

          } 

          reportId!: any

    getReportIdForRedirect(id: string){
      this.reportId = this.reportService.getReport(id)
    }
           
    addTasks(){
      this.checkboxVisible = true;
      this.addTasksToAreaButtonShowing = false;
       
    }

    clearMap(){
      window.location.reload()
    }
    
 
    imagePost(imageFile: File){

      let image = new FormData();

        image.append("image", imageFile, this.property.name)

        return this.http.post<{message: string; image: Image}>(BACKEND_URL + 'images', image)
          
    }
    
    async onImagePicked(event: Event) {
      
      let imagePath: string; 
      let imageFile: File;
      let imagePreview: any;
      let eventCasttoHtml = event.target as HTMLInputElement;

      if (eventCasttoHtml.files) {
        const reader = new FileReader();
        imageFile = eventCasttoHtml.files[0];

        reader.onload = () => {
        imagePreview = reader.result as string;

          this.areasForReport.forEach((area:any)=>{

            if(this.currentCollectionName == area.name){
              this.imagePost(imageFile).subscribe((data)=> {
                // console.log('image path in subscribe', data.image.imagePath)
                

                if(data){
                imagePath = data.image.imagePath
              
                this.imagePath = imagePath
                area.imagePaths.push(imagePath)


                } else{

                  console.log('no data')
                }

                
              })
              
              area.imagePreviews.push(imagePreview)
              
              
            } else {
              console.log('no collection name matches')
            }
            
          })
        };

        reader.readAsDataURL(imageFile);

      } else {
        return;
      }
    
    }

   
   async findMe() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      
      this.userLocation = {latitude: latitude, longitude: longitude}
      this.userLongitude = this.userLocation.longitude
      this.userLatitude = this.userLocation.latitude
    })
  }
  
  async calculateDistance() {
  
    let propertyLocation = new google.maps.LatLng(this.latitude, this.longitude);

    let userLocation = new google.maps.LatLng(this.userLatitude, this.userLongitude);
    
    this.distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, propertyLocation);

    if (this.distance < 1500) {
      this.userOnsite = true
    } else {
      this.disableReport()
    }

    console.log('distance', this.distance)
  }

  disableReport(){
    this.alertsService.notOnSiteAlert();
    this.userOnsite = false;
    this.readyToSave = false; 
    this.checkboxVisible = false;
    this.addTasksToAreaButtonShowing = false;
  }

   onMapReady(map:any) {
    this.initDrawingManager(map);
    this.findMe().then((position)=>{
      console.log(position)
    })
  }

  watchPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {"Geolocation is not supported by this browser.";}
  }

  showPosition(position: any) {
    console.log('position in track position',
      position.coords.latitude, 
      position.coords.longitude)
  }

  initDrawingManager(map:any) {
    let arrayOfAreaObjects:[{}]= [{}]
    arrayOfAreaObjects.shift()
    
    const options = {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: this.drawingControl,
      drawingControlOptions: {
        drawingModes: this.drawingModes, 
      },

      polygonOptions: {
        outline: false, 
        draggable: true,
        editable: true,
        fillColor: 'white',
        fillOpacity: .4,
        strokeWeight: 7,
        strokeColor: this.initialColor,
        zIndex: 1,
        fullScreenControl: true, 
      },
    };
    
    const drawingManager = new google.maps.drawing.DrawingManager(options);

    drawingManager.setMap(map);
    const _self = this; 

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {

      _self.drawingControl = false; 
      _self.drawingModes = ['']
      _self.polygonComplete  = true; 
      _self.addTasksToAreaButtonShowing = true;
      _self.selectedShapes.push(polygon);

      function Polygon(number: number, paths: [{}], color: string) {

        number = number;
        paths = paths; 
        color = color; 
      }

      let paths = [{}]
      paths.shift()
      let polyPaths =[{}]
      polyPaths.shift()

      const newPolygon = new (Polygon as any)(paths)

      console.log('newPolygon', newPolygon)

      const len = polygon.getPath().getLength();

      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = {lat: vertex.lat(), lng: vertex.lng()};
        
        polyPaths.push(vertexLatLng)

        newPolygon.paths = polyPaths
        _self.polygons.push(newPolygon);
        
        console.log('newPolygon', newPolygon)
        console.log('polygons', _self.polygons)
      }
    });

    console.log('this.polygons', this.polygons);

  }


}

