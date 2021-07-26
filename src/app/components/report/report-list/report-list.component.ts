import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReportService } from '../../../services/report.service';
import { PropertyService } from '../../../services/property.service';


import { Property } from '../../../models/property.model';
import { ActivatedRoute } from '@angular/router';

import { Report } from '../../../models/report.model';
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
  
  isLoading!: boolean; 
  

  constructor(
    private reportService: ReportService,
    private authService: AuthService
    ) {}

  ngOnInit() {

    this.isLoading = true;

    this.reportService.getAllReports();

    this.reportsSub =  this.reportService
    .getReportUpdateListener()
    .subscribe(
      (reportData:{ reports: Report[]})=>{
        this.reports = reportData.reports; 
      }
      
    );

    console.log('this.reports', this.reports)

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
