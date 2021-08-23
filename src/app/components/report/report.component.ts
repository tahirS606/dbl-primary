import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import { ReportService } from './../../services/report.service';
import { PropertyService } from './../../services/property.service';
import { Report } from './../../models/report.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from './../../models/property.model';
import Swal from 'sweetalert2';
import { FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,} from '@angular/forms';
import { _MatSelectBase } from '@angular/material/select';

  declare const $: any;
  declare const google: any;

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

  strokeColorsArray: String[] = [
    "#708F4F", "#70C8CF", "#EFCD42", "#D1AD93", "#1E9DD8", "#CFDF6D" ]

    // "#49997c", "#027ab0", "#e51a1a", "#eed630"

  userLocation!: any

  map: any; 
  latitude!: number; 
  longitude!: number; 
  property!: Property;
  propertyId!: any; 
  address: any;
  creator!: string; 
  mapZoom!: number; 
  initialColor: string = "white"
  shape: any; 
  imagePreview!: string;
  distance: number = 0

  imageFileArray: {}[] = [{}];
  imagePreviewArray: string[] = [];
  userOnsite: boolean = false; 
  userEmail: string = ''

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
  
 
  addTasksToAreaButtonShowing: boolean = false
  readyToSave: boolean = false
  zoomControl: boolean = false;

  userLongitude: number = 0
  userLatitude: number = 0

  // report features
  areasForReport: [{}] = [{}]
  polyArrayLatLng: [{}] = [{}]

  // for collection name
  count: number = 0 
  reportSaved:boolean = false; 
  report!: Report;
  reportData: any;
  reportDate: any;
  reportTime: any; 
  atLeastOneAreaSaved: boolean = false; 

  form!: FormGroup;
  date = new Date();
  checkboxVisible:boolean = false;
  addTasksButtonDisabled: boolean = true;

  

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
    private authService: AuthService,
    
    ) { 
      this.form = this.formBuilder.group({
        tasks: new FormArray([])
      });
      this.addCheckboxesToForm();
    }


    ngAfterViewInit(){
      
    }

    ngOnInit(){
      this.calculateDistance()

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

        function Collection(name: string, areas: [], tasks:[{}], time: Date, selectedShapes:[{}], color: String) {
          name = name;
          areas = areas;
          tasks = tasks;
          time = time; 
          selectedShapes = selectedShapes; 
          color = color; 
        }

        const newCollection = new (Collection as any)(collectionName, this.polyArrayLatLng, tasks, this.date)
        newCollection.name = collectionName 
        newCollection.areas = this.polyArrayLatLng
        newCollection.tasks = tasks
        newCollection.time = this.date
        newCollection.color = this.strokeColorsArray[this.count]

        this.selectedShapes.forEach((shape: any)=>{ shape.setOptions({strokeColor: this.strokeColorsArray[this.count], fillColor: 'white'})})

        this.areasForReport.push(newCollection);
        this.readyToSave = true;
        this.form.reset();
        this.checked = false;
        this.polyArrayLatLng = [{}];
        this.selectedShapes = [];
        this.selectedShapes.shift();
        this.polyArrayLatLng.shift();
        this.mapZoom = this.zoom;
        this.reportData = Object.values(this.areasForReport);
        this.areasForReport = this.reportData;
        
        }

        onSaveReport() {
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
              // this.imagePreviewArray,
              )        
              
              this.router.navigate(['reports/'])
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

    onImagePicked(event: Event) {
      let imageFile;
      let imagePreview;
      let eventCasttoHtml = event.target as HTMLInputElement;
      if (eventCasttoHtml.files) {
        imageFile = eventCasttoHtml.files[0];
      
        const reader = new FileReader();
        reader.onload = () => {
          imagePreview = reader.result as string;
          this.imagePreviewArray.push(imagePreview)
        };
        reader.readAsDataURL(imageFile);
        
        this.imageFileArray.push(imageFile)
        // console.log('imageFile', imagePreview)
        console.log('imagePreviewArray', this.imagePreviewArray)

      } else {
        return;
      }
    }

    Swal: any

    notOnSiteAlert(){
      Swal.fire('You are not on site! (Or your location services are turned off). Please go to the site to create a report.')
    }
    
    tinyAlert(){
      Swal.fire('Report Saved!');
    }
    
    successNotification(){
      Swal.fire('Hi', 'We have been informed!', 'success')
    }
    
    alertConfirmation(){
      Swal.fire({
        title: 'Ready to submit?',
        text: 'Report cannot be edited once submitted.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, save report.',
        cancelButtonText: 'Go back to editing'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Thank you!',
            'Report Submitted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Ok',
            'Complete report and then save.)',
            'error'
          )
        }
      })
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

    console.log('calculate distance ran')

    if (this.distance < 1400) {
      this.userOnsite = true
    } else {
      this.disableReport()
    }
  }



  disableReport(){
    this.notOnSiteAlert();
    this.userOnsite = false;
    this.readyToSave = false; 
    this.checkboxVisible = false;
    this.addTasksToAreaButtonShowing = false;
  }

   onMapReady(map:any) {
    this.initDrawingManager(map);
    this.findMe().then((position)=>{
      console.log(position)
      // this.calculateDistance()
    })
  }

  watchPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {
      "Geolocation is not supported by this browser.";
    }
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
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"], 
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

      // _self.calculateDistance()

      _self.polygonComplete  = true; 
      _self.addTasksToAreaButtonShowing = true;

      _self.selectedShapes.push(polygon);
    
      const len = polygon.getPath().getLength();
      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = {lat: vertex.lat(), lng: vertex.lng()};
        _self.polyArrayLatLng.push(vertexLatLng);
      }

      console.log('zoom', _self.zoom)
    
    });

    console.log('selectedShapes', this.selectedShapes)

    
  }

 
}

