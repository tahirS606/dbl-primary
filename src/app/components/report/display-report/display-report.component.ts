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
  paths: any;
  color: any;

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
      { lat: 35.93823884975013, lng: -79.00299961197996 },
​
{ lat: 35.93817858641612, lng: -79.00299961197996 },
​
 { lat: 35.938167185239664, lng: -79.00309885371351 },
​
{ lat: 35.93821333284854, lng: -79.00312232304239 },
​
{ lat: 35.93821333284854, lng: -79.00265628922605 },
​
{ lat: 35.93818564428644, lng: -79.00265628922605 },
​
{ lat: 35.93817152854518, lng: -79.0027018867793 },
​
{ lat: 35.93823722101197, lng: -79.0027106039586 },
    ]

    

  ngOnInit() {

    this.clientView = true; 
  

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

            console.log('areasforreport.area', this.report.areasForReport)

            this.report.areasForReport.forEach(
              
              (area:any)=>{
                
                this.paths = console.log('paths', Object.values(area)[1]);

                this.color = console.log('color', Object.values(area)[4])

            })

            
            

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


  ngOnDestroy(){


  }
}

