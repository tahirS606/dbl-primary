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
tasksCompleted!:any;
lat!: number;
long!: number;

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

  addReport(id: string, date: any, propertyRoute: number, propertyId: string, propertyName: string, propertyAddress: string, propertyLatitude: number, propertyLongitude: number, mapZoom: number, tasks: [{
    areas: [{lat: number, long:number}],
    tasksCompleted:string[];
}]) {
  const report: Report = {id: id, date: date, propertyRoute: propertyRoute, propertyId: propertyId, propertyName: propertyName, propertyAddress: propertyAddress, propertyLatitude: propertyLatitude, propertyLongitude: propertyLongitude, mapZoom: mapZoom, tasks: [{
    areas: [{lat: this.lat, long:this.long}],
    tasksCompleted:this.tasksCompleted
}]}
console.log('report', report) 
      this.http
        .post<{ message: string; reportId: string }>(
          'http://localhost:3000/reports',
          report, 
        )
        .subscribe((responseData) => {
          // this.router.navigate(['/']);
        });
        
    }
  }


