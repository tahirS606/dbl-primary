import { Report } from './../../models/report.model';
import { Task } from './../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService implements OnInit{

  ngOnInit(){

  }

tasks:Task[]=[]
reports: any; 

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

  // getReportsbyProperty(id : string){
  //   const report = this.http.get<{report:Report}>
  //   ('http://localhost:3000/reports')
  //   if id === report.PropertyId{

  //   }
  // }
}

