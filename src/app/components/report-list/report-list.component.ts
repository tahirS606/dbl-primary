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

  reports!: any
  propertyId!: any; 
  userIsAuthenticated = false;
  property!: Property; 
  reportsArray!: [{}]
  

  constructor(
    private propertyService:PropertyService,
    private ReportService: ReportService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
    ) {}

  ngOnInit(): void {

    this.reportsToArray()

    // this.reports = this.ReportService.getAllReports()

    console.log(this.reportsArray)

    this.reportsSub =  this.ReportService
    .getReportUpdateListener()
    .subscribe(
      (reportData:{ reports: Report[]})=>{
        this.reports = reportData.reports; 
      }
    );

    this.reports = this.ReportService
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

  reportsToArray(){
    for( let i in this.reportsSub) {   
    console.log('reports pushing', this.reports[i]);
    this.reportsArray.push(this.reports[i]);
    console.log('this.reportsArray', this.reportsArray)
  }}
   

    ngOnDestroy() {
      this.reportsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
    
  }
