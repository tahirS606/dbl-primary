import { of } from 'rxjs';
import { Subscription } from 'rxjs';
import { Report } from './../../../models/report.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from './../../../services/report.service';
import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';


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
  

  polygonOptions : {fillColor:string, fillOpacity: number} = {
    fillColor : '#ffffff',
    fillOpacity: .1
  }

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

  polyKeys: any; 
  polyValues: any; 

  constructor( 
    private reportService: ReportService,
    private route: ActivatedRoute,
    private propertyService: PropertyService, 
    private router: Router,
    
    ) { }

  ngOnInit() {
    this.polygons.shift()
    this.clientView = true; 
    this.url = this.router.url;
    this.windowUrl = window.location.href;
  
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

            console.log(this.report.areasForReport.forEach((area:any)=>{

              console.log('polygon area', area.polygon)

            }))

            this.report.areasForReport.forEach(
            
              (polygon:any)=>{

                let pathCollection: any = []

                console.log('polygon.polygons', polygon.polygons)

                const paths = polygon.polygons;

                const polyPaths = Object.values(paths)

                const polyColor= Object.values(polygon)[4]

                polyPaths.forEach((path:any)=>{
                  console.log('path.paths', path.paths)
                  pathCollection.push(path.paths)
                  console.log('pathCollection', pathCollection)
                  // works but we need to get it a new polygon

                  const newPolygon = new (Polygon as any)({ paths: [], color:'' })

                  newPolygon.paths = pathCollection 
                  newPolygon.color = polyColor

                  this.polygons.push(newPolygon)

                  console.log('this.polygons', this.polygons)

              
                })
                
            })
           
      });

      this.polygonSub = of(this.polygons)
      this.polygonSub.subscribe((polygon:any)=>{
        console.log(polygon)
      })

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

  

  onMapReady(map:any) {  }

  panelOpenState: boolean = false;
  loadMap: boolean = false;

  ngOnDestroy(){}


}

