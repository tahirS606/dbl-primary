import { Report } from './../../../models/report.model';
import { AuthService } from '../../../services/auth.service';
import { Subscription, Subject } from 'rxjs';
import { ReportService } from '../../../services/report.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit, OnDestroy{

  private reportsSub!: Subscription;
  private authStatusSub!: Subscription;

  reports!: any
  userIsAuthenticated = false;
  private reportsUpdated = new Subject<{
    reports: Report[];
  }>();
  
  isLoading!: boolean; 
  transformedReports!: any

  Object = Object;
  
  constructor(
    private reportService: ReportService,
    private authService: AuthService
    ) {}

  ngOnInit() {

    this.isLoading = true;
    this.reportService.getAllReports().subscribe((reportDisplayData: any)=>{
        console.log(reportDisplayData)
        this.reports = reportDisplayData.reports; 
        this.reportsUpdated.next({
          reports: [...this.reports]
        })
      });


    this.reportsSub = this.reportService
    .getReportUpdateListener()
    .subscribe(
      (reportData: {reports: Report[];
      })=>{
        this.reports = reportData.reports
      }
    )

    
  
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    }) 
  }
    ngOnDestroy() {
      this.reportsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
    
  }
