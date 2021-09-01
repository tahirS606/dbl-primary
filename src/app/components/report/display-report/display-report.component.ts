import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Report } from './../../../models/report.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from './../../../services/report.service';
import { Component, OnInit, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { MapsAPILoader } from '@agm/core';


declare const google: any;

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.css']
})
export class DisplayReportComponent implements OnInit ,  OnDestroy{

  @Output() clientView!: Boolean;

  Object = Object;

  reportId!: any
  report!: Report
  reportSub!: Subscription;

  mapZoom!: number; 
  longitude: any
  latitude: any
  isLoading: boolean = true; 
  disableDefaultUI: boolean = true; 
  polygons: [{}] =[{}]
  polygonValues!: []

  map: any

  url!: string
  windowUrl!: string
  property: any;

  constructor( 
    private reportService: ReportService,
    private route: ActivatedRoute,
    private propertyService: PropertyService, 
    private router: Router,
    private authService: AuthService,
    private mapsAPILoader: MapsAPILoader,
    ) { }

    markers = [
      {lat: 35.938232, lng: -79.002894},
      {lat: 35.93824, lng: -79.002893}
    ]

    

  ngOnInit() {


    this.mapsAPILoader.load().then(() => {
 
      const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(54.69726685890506, -2.7379201682812226),
        new google.maps.LatLng(55.38942944437183, -1.2456105979687226)

        
      );

    }
  );

  new google.maps.Marker({
    position: new google.maps.LatLng (this.latitude, this.longitude),
    map: this.map,
    animation: google.maps.Animation.BOUNCE,
    title: "collection"
});

    this.clientView = true; 

    


    
    this.polygons.shift()

    this.url = this.router.url;
    console.log('url', this.url)
    this.windowUrl = window.location.href;
    console.log('window url', this.windowUrl)

    this.reportId = this.route.snapshot.paramMap.get('reportId');

    this.reportService
    .getReport(this.reportId)
    .subscribe((reportData:any) => {
      this.report = {
      id: reportData._id, 
      date: reportData.date, 
      time: reportData.time,  
      propertyId: reportData.propertyId, 
      propertyName: reportData.propertyName, 
      propertyAddress: reportData.propertyAddress, 
      propertyLatitude: reportData.propertyLatitude, 
      propertyLongitude: reportData.propertyLongitude, 
      areasForReport: reportData.areasForReport,  
      creator: reportData.creator, 
      mapZoom: reportData.mapZoom, 
      imagePreviewArray: reportData.imagePreviewArray, 
      };

 

      this.propertyService
            .getProperty(this.report.propertyId)
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
            this.mapZoom = this.report.mapZoom

      });

      this.isLoading = false; 

    

      
});



this.reportSub = this.reportService
      .getReportUpdateListener()
      .subscribe(
        (reportData: any ) => {
          this.report = reportData.report;
        }
    );
  }

  onMapReady(map:any) {
    
  
  }

  panelOpenState: boolean = false;

  loadMap: boolean = false;

  initDrawingManager(map:any) {

    console.log('initDrawing ran', )
    
    const options = {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: false,
      }


      this.report.areasForReport.forEach((area:any)=>{

      let polygon = new google.maps.Polygon({
          paths: Object.values(area.areas),
          strokeColor: area.color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35
        });
        this.polygons.push(polygon);
        polygon.setMap(this.map);
        console.log('polygon', polygon)
       
    })

    

    // note take the polygojns and iterate over them in tjhe template like polygon.lat etc. 
    
    
      
    
    const drawingManager = new google.maps.drawing.DrawingManager(options);

    drawingManager.setMap(map);
    const _self = this; 

  }

  ngOnDestroy(){

    this.reportSub.unsubscribe()

  }
}

