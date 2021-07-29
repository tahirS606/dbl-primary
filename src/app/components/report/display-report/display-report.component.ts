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
      tasks: reportData.tasks,  
      creator: reportData.creator, 
      mapZoom: reportData.mapZoom, 
      imagePreviewArray: reportData.imagePreviewArray, 
      };
});

//     subscribe((reportData: any) => {
//       this.report = {
//         id: reportData._id,
//         propertyAddress: reportData.address,
//         date: reportData.date, 
//         propertyId: reportData.propertyId,
//         tasks: reportData.tasks, 
//         creator: reportData.creator, 
//         time: reportData.time,
//         mapZoom: reportData.mapZoom, 
//         propertyName: reportData.propertyName,
//         imagePreviewArray: reportData.imagePreviewArray,

//       };
// });

    // this.reportsService.getReport(reportId)


  }


}

