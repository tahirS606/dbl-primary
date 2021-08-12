import { AuthService } from 'src/app/services/auth.service';
import { Subscription, Subject } from 'rxjs';
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
  reports!: Report[];
  reportsSub!: Subscription;
  userIsAuthenticated = false
  private authStatusSub!: Subscription;
  isLoading: boolean = true
  userId!: string; 
  filteredReports!: Report[]

  private reportsUpdated = new Subject<{
    reports: Report[];
  }>();

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private reportService: ReportService,
  ) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');

    this.reportService.getAllReports().subscribe((reportDisplayData: any)=>{
      this.reports = reportDisplayData.reports;

      this.filteredReports = this.reports.filter((report: Report) => report.propertyId === this.propertyId);
      console.log('reports', this.reports)
      console.log('filtered reports', this.filteredReports)
      
      this.reportsUpdated.next({
        reports: [...this.reports]
      })
      this.isLoading = false;
    })
    
    

  this.reportsSub = this.reportService
      .getReportUpdateListener()
      .subscribe(
        (reportData: { reports: Report[] }) => {
         console.log(reportData.reports)
         this.reports = reportData.reports
        }
    );


    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    })
    

}
}