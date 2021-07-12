import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReportService } from './../../services/report.service';
import { PropertyService } from './../../services/property.service';


import { Property } from './../../models/property.model';
import { ActivatedRoute } from '@angular/router';

import { Report } from './../../models/report.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit, OnDestroy{

  private reportsSub!: Subscription;
  private authStatusSub!: Subscription;

  reports!: Report[];
  propertyId!: any; 
  userIsAuthenticated = false;
  property!: Property; 
  

  constructor(
    private propertyService:PropertyService,
    private ReportService: ReportService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
    ) {}

  ngOnInit(): void {

    this.propertyId = this.activatedRoute.snapshot.paramMap.get('propertyId');

    this.ReportService.getAllReports;

    this.reportsSub =  this.ReportService
    .getReportUpdateListener()
    .subscribe(
      (reportData:{ reports: Report[]})=>{
        this.reports = reportData.reports; 

      }
    );

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
