import { Task } from './../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService implements OnInit{

  ngOnInit(){

  }

tasks:Task []=[]
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


  
  }


