import { map } from 'rxjs/operators';
import { Property } from './../models/property.model';
import { Subject, Observable } from 'rxjs';
import { Report } from './../models/report.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

const BACKEND_URL= environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ReportService implements OnInit{

  private reportUpdated = new Subject<{
    report: Report ;
  }>();

  ngOnInit(){

  }

tasks:[] =[]
reports: any; 
tasksCompleted!:any;
lat!: number;
long!: number;
property!: Property

  constructor(
    private http: HttpClient
  ) { }

  getTasks(){
    return this.http.get<{id: string, name: string}>(BACKEND_URL+ "tasks")
  }

  getReportUpdateListener() {
    return this.reportsUpdated.asObservable();
  }

  getAllReports(){
    return this.http.get<{message: string, reports: any}>
    (BACKEND_URL + "reports").pipe(
      map((reportData)=>{
        return {
          reports: reportData.reports.map((
            report: any)=>{
              return {
                date: report.date
              }
            }
          )
        }
      })
    ).subscribe((reportData)=>{
      this.reports = reportData.reports;
      this.reportsUpdated.next({
        reports: [...this.reports]
      })
    })
  }

  private reportsUpdated = new Subject<{
    reports: Report[];
  }>();

  // getReportByProperty(propertyID:string){
  //   const reports = this.http.get<Report[]>(
  //     'http://localhost:3000/reports'
  //   ).map(if reportData.propertyId === propertyID){
  //     console.log(reportData)
  //   }
  // }

  addReport(
    date: any, 
    time: any, 
    propertyId: string, 
    propertyName: string,  
    propertyAddress: string, 
    tasks: [{}]) 
    {
    const report: 
    Report = { 
      id: '', 
      date: date,
      time: time, 
      propertyId: propertyId, 
      propertyName: propertyName, 
      propertyAddress: propertyAddress, 
      tasks: tasks
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

