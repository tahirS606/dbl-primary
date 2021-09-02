import { of } from 'rxjs';
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

  polygonSub: any

  reportId!: any
  report!: Report
  reportSub!: Subscription;
  color!: string;

  mapZoom!: number; 
  longitude: any
  latitude: any
  isLoading: boolean = true; 
  disableDefaultUI: boolean = true; 
  polygons: any = []
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



  ngOnInit() {
    this.polygons.shift()

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
            this.mapZoom = this.report.mapZoom;

            console.log('areas for report', this.report.areasForReport)


            function Polygon(paths: any,  color: any) {
              paths = paths;
              color = color; 
            }

            
            this.report.areasForReport.forEach(
            
              (area:any)=>{

                const polygon = new (Polygon as any)({ paths: [], color: '' })

                polygon.paths =  Object.values(area)[1]
                polygon.color = Object.values(area)[4]

              
                console.log('polygon', polygon)
                this.polygons.push(polygon)
                console.log(this.polygons)
                console.log('polygon.paths', polygon.paths)
                console.log(polygon.color)
            })
      });

      this.polygonSub = of(this.polygons)
      this.polygonSub.subscribe((polygon:any)=>{
        console.log(polygon)
      })

      this.isLoading = false; 
      console.log('this.polysub', this.polygonSub)
});

this.reportSub = this.reportService
      .getReportUpdateListener()
      .subscribe(
        (reportData: any ) => {
          this.report = reportData.report;
        }
    );
  }

  onMapReady(map:any) {  }

  panelOpenState: boolean = false;
  loadMap: boolean = false;

  ngOnDestroy(){}
}

