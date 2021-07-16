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


reports: any; 
tasksCompleted!:any;
lat!: number;
long!: number;
property!: Property;
creator!: string;

  constructor(
    private http: HttpClient
  ) { }

 

  getReportUpdateListener() {
    return this.reportsUpdated.asObservable();
  }

  getAllReports(){
    return this.http.get<{message: string, reports: Report[]}>
    (BACKEND_URL + "reports").subscribe((reports)=>{console.log('reports', reports)})
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
    tasks: [{}],
    mapImage: string, 
    creator: string,
    mapZoom: number,
    imagePreviewArray: string[],
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
      tasks: tasks, 
      mapImage: mapImage,
      creator: creator,
      mapZoom: mapZoom,
      imagePreviewArray: imagePreviewArray, 
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

