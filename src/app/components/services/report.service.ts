import { HttpClient } from '@angular/common/http';
import { Task } from './../../models/Task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

tasks:Task[]=[]

  constructor(
    private http: HttpClient
  ) { }

  getTasks(){
  //   return this.http.get<{id: string, name: string}>('http://localhost:3000/tasks')
  // }
}
}
