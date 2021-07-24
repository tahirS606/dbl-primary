import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  creator!: string; 
  mapZoom!: number; 
 initialColor: string = "white"
  shape: any; 
  imagePreview!: string;

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
  selectedShapes: {}[] = []
  selectedShapesCumulative: {}[] =[]
  polygonCount: number = 0;
  addTasksToAreaButtonShowing: boolean = false
  readyToSave: boolean = false
  zoomControl: boolean = false;

  // report features
  areasForReport: [{}] = [{}]
  polyArrayLatLng: [{}] = [{}]

  // for collection name
  count: number = 0 
  reportSaved:boolean = false; 
  report!: Report;
  reportData: any;

  files!: any

  @ViewChild('mapCapture', { static: true }) mapCapture: any;
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

        function Collection(name: string, areas: [], tasks:[{}], time: Date, selectedShapes:[], color: String) {
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
        newCollection.selectedShapes = this.selectedShapes
        newCollection.color = this.strokeColorsArray[this.count]

        this.selectedShapes.forEach((shape: any)=>{ shape.setOptions({strokeColor: this.strokeColorsArray[this.count], fillColor: 'white'})})

        this.areasForReport.push(newCollection)
        this.readyToSave = true
        console.log('newCollection', newCollection)

        this.form.reset()
        this.checked = false
        this.polyArrayLatLng = [{}]
        this.selectedShapes = []
        this.selectedShapes.shift()
        this.polyArrayLatLng.shift()
        this.polygonCount = 0;
        this.mapZoom = this.zoom;
        this.reportData = Object.values(this.areasForReport);
        }

        mapImage: any;


        onSaveReport() {
            this.reportService.addReport(
              this.reportDate, 
              this.reportTime, 
              this.propertyId, 
              this.property.name,
              this.property.address,
              this.areasForReport,
              this.mapImage,
              this.creator, 
              this.mapZoom,
              this.imagePreviewArray,
              )        

              this.form.reset();
              this.router.navigate(['/'])
              console.log(this.areasForReport)
          } 
           
    addTasks(){
      this.checkboxVisible = true;
      this.addTasksToAreaButtonShowing = false;
       
    }

    clearMap(){
      window.location.reload()
    }

    imageFileArray: {}[] = [{}]
    imagePreviewArray: string[] = []

    onImagePicked(event: Event) {
      let imageFile;
      let imagePreview: string = '';
      let eventCasttoHtml = event.target as HTMLInputElement;
      if (eventCasttoHtml.files) {
        imageFile = eventCasttoHtml.files[0];
        // this.form.patchValue({ image: imageFile });
        // this.form.get('image')?.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          imagePreview = reader.result as string;
          this.imagePreviewArray.push(imagePreview)
          console.log('image preview in reader', imagePreview)
        };
        reader.readAsDataURL(imageFile);
        console.log(imageFile);
        // console.log(this.form);

        this.imageFileArray.push(imageFile)
        console.log('imageFileArray', this.imageFileArray)
        console.log('image preview', imagePreview)
        
        console.log('this.imagepreviewarray', this.imagePreviewArray)

      } else {
        return;
      }
    }

    Swal: any
    
    
    tinyAlert(){
      Swal.fire('Hey there!');
    }
    
    successNotification(){
      Swal.fire('Hi', 'We have been informed!', 'success')
    }
    
    alertConfirmation(){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Removed!',
            'Product removed successfully.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Product still in our database.)',
            'error'
          )
        }
      })
    }  

  ngOnInit(): void {

    this.creator = this.authService.getUserId();
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
        fillColor: 'white',
        fillOpacity: .4,
        strokeWeight: 7,
        strokeColor: this.initialColor,
        // clickable: true,
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

      
  
      _self.polyArrayLatLng.push(_self.polyArrayLatLng[0]);

      _self.selectedShape = polygon
      _self.selectedShapes.push(polygon)

      _self.selectedShapesCumulative.push(polygon)

      console.log('selected shapes', _self.selectedShapes)
      
    });


  }

}

