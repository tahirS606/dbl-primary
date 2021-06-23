import { Property } from './../models/property.model';
import { Subject } from 'rxjs';
import { Report } from './../models/report.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { report } from 'node:process';

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
    return this.http.get<{id: string, name: string}>('http://localhost:3000/tasks')
  }

  getAllReports(){
    const fetchedReports = this.http.get<{reports:any}>
    ('http://localhost:3000/reports')
  }

  getReportByProperty(propertyID:string){
    const reports = this.http.get<Report[]>(
      'http://localhost:3000/reports'
    ).subscribe(data=>{})
  }

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
        'http://localhost:3000/reports',
        report, 
      )
      .subscribe((responseData) => {
        console.log('report', responseData)
      });

      
      
      
  }



  
  
}

