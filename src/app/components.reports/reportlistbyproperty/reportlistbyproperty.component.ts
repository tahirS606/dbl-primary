import { Subscription } from 'rxjs';
import { Report } from './../../models/report.model';
import { ReportService } from './../../services/report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportlistbyproperty',
  templateUrl: './reportlistbyproperty.component.html',
  styleUrls: ['./reportlistbyproperty.component.css']
})
export class ReportlistbypropertyComponent implements OnInit {

  propertyId!: any
  reports!: any

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');

    this.reports = this.reportService.getReportsByProperty(this.propertyId).subscribe((filteredReports)=>{
      console.log(filteredReports)
    })

  }

}
