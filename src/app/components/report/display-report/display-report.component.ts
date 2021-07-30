import { Report } from './../../../models/report.model';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.css']
})
export class DisplayReportComponent implements OnInit {

  reportId!: any
  report!: Report

  mapZoom: number = 17; 
  longitude!: number;
  latitude!: number;
  

  constructor( 
    private reportService: ReportService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

    this.reportId = this.route.snapshot.paramMap.get('reportId');
    console.log('report id', this.reportId);

    this.reportService.getReport(this.reportId).subscribe((reportData:any) => {
      this.report = {
      id: reportData._id, 
      date: reportData.date, 
      time: reportData.time,  
      propertyId: reportData.propertyId, 
      propertyName: reportData.propertyName, 
      propertyAddress: reportData.propertyAddress, 
      propertyLatitude: reportData.propertyLatitude, 
      propertyLongitude: reportData.propertyLongitude, 
      tasks: reportData.tasks,  
      creator: reportData.creator, 
      mapZoom: reportData.mapZoom, 
      imagePreviewArray: reportData.imagePreviewArray, 
      };
});

 


  }


}

