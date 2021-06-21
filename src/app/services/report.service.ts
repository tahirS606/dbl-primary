import { Property } from './../models/property.model';
import { Subject } from 'rxjs';
import { Report } from './../models/report.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

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

  addReport(name: string, address: string, route: number, latitude: number, longitude: number) {

    // const report: Report = { id: '', property: property, tasks: tasks }
    // this.http
    //   .post<{ message: string; propertyId: string }>(
    //     'http://localhost:3000/reports',
    //     report, 
    //   )
    //   .subscribe((responseData) => {
        // this.router.navigate(['/']);
      // });
      
  }

  
  
}

