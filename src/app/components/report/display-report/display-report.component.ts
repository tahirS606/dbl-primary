import { Subscription } from 'rxjs';
import { Report } from './../../../models/report.model';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './../../../services/report.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.css']
})
export class DisplayReportComponent implements OnInit , AfterViewInit, OnDestroy{

  reportId!: any
  report!: Report
  reportSub!: Subscription;

  mapZoom!: number; 
  longitude: any
  latitude: any
  isLoading: boolean = true; 

  map: any

  constructor( 
    private reportService: ReportService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

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
      this.isLoading = false; 

      this.getMapProps()
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
    this.initDrawingManager(map);
    this.latitude = this.report.propertyLatitude;
  this.longitude = this.report.propertyLongitude;
    
  }

  panelOpenState: boolean = false;

  loadMap: boolean = false;

ngAfterViewInit(){
    
  setTimeout(() => this.loadMap = true, 0)

  }

  async getMapProps(){
    this.latitude = this.report.propertyLatitude;
    this.longitude = this.report.propertyLongitude;
    this.mapZoom = this.report.mapZoom
  }


  initDrawingManager(map:any) {
    
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
        strokeColor: 'blue', 
        zIndex: 1,
        fullScreenControl: true, 
      },
    };
    
    const drawingManager = new google.maps.drawing.DrawingManager(options);

    drawingManager.setMap(map);
    const _self = this; 

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon:any) {
    
    });
  }

  ngOnDestroy(){

    this.reportSub.unsubscribe()

  }
}

