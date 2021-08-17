import { PageEvent } from '@angular/material/paginator';
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

  totalReports = 10;
  reportsPerPage= 5;
  pageSizeOptions = [1,2,5,10]

  reports!: any
  userIsAuthenticated = false;
  private reportsUpdated = new Subject<{
    reports: Report[];
  }>();
  
  isLoading: boolean = true;
  transformedReports!: any

  Object = Object;
  
  constructor(
    private reportService: ReportService,
    private authService: AuthService
    ) {}

    onChangedPage(pageData: PageEvent){
      console.log(pageData)

    }

  ngOnInit() {

    this.reportService.getAllReports().subscribe((reportDisplayData: any)=>{
        console.log(reportDisplayData)
        this.reports = reportDisplayData.reports; 
        this.reportsUpdated.next({
          reports: [...this.reports]
        })
        this.isLoading = false; 
      });


    this.reportsSub = this.reportService
    .getReportUpdateListener()
    .subscribe(
      (reportData: {reports: Report[];
      })=>{
        this.reports = reportData.reports;
        
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
