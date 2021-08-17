import { map } from 'rxjs/operators';
import { Property } from './../models/property.model';
import { Subject } from 'rxjs';
import { Report } from './../models/report.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

const BACKEND_URL= environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ReportService implements OnInit{

  private reports: Report [] = [];
  private _reports = new Subject <Report[]>();

  private reportsUpdated = new Subject<{
    reports: Report[];
  }>();
  private updatedReports: any;

  ngOnInit(){

  }

tasksCompleted!:any;
lat!: number;
long!: number;
property!: Property;
creator!: string;

  constructor(
    private http: HttpClient
  ) { }

  getReportsByProperty(propertyId : string){
    return this.http.get<{message: string, reports: any}>(BACKEND_URL + "reports/" + propertyId).pipe(map((filteredReport)=>{
       
    }

    ))
  }

  getReportUpdateListener() {
    return this.reportsUpdated.asObservable();
  }

  getAllReports(reportsPerPage: number, currentPage: number){

    const queryParams= `?pagesize=${reportsPerPage}&page=${currentPage}`;

    return this.http.get<{message: string, reports: any}>
    (BACKEND_URL + "reports/" + queryParams
    )
    .pipe(
      map((reportData) =>{
        console.log('reportData', reportData)
        return {
          reports: reportData.reports.map((report: any)=> {
            return {
              id: report._id, 
              date: report.date, 
              time: report.time, 
              propertyName: report.propertyName,
              propertyId: report.propertyId,
              propertyAddress: report.propertyAddress, 
              tasks: report.tasks, 
              creator: report.creator, 
              mapZoom: report.mapZoom, 
              
            }
          })
        }
      })
    )
  }

  getReport(id: string) {
    return this.http.get<{report : Report}>(
      BACKEND_URL + 'reports/' + id
    )
  }

  addReport(
    date: any, 
    time: any, 
    propertyId: string, 
    propertyName: string,  
    propertyAddress: string, 
    propertyLatitude: number, 
    propertyLongitude: number, 
    areasForReport: any,
    creator: string,
    mapZoom: number,
    
    ) 
  
    {
    const report: 
    Report = { 
      id: '', 
      date: date,
      time: time, 
      propertyId: propertyId, 
      propertyName: propertyName, 
      propertyAddress: propertyAddress, 
      propertyLatitude: propertyLatitude, 
      propertyLongitude: propertyLongitude, 
      areasForReport: areasForReport, 
      creator: creator,
      mapZoom: mapZoom
  }
    this.http
      .post<{ message: string; propertyId: string }>(
        BACKEND_URL + "reports",
        report, 
      )
      .subscribe((responseData) => {
        console.log('report', responseData)
      });

      

  }
  
}

