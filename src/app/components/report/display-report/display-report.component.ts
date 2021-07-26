import { Report } from './../../../models/report.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.css']
})
export class DisplayReportComponent implements OnInit {

  reportId!: string
  report!: Report

  constructor( 
    reportService: ReportService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

    // this.reportId = this.route.snapshot.paramMap.get('reportId');
    
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

// probably easier to have a screen shot of map