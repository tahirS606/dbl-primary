import { PropertyService } from './../../services/property.service';


import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, of } from 'rxjs';


import { Component, OnInit, AfterViewInit, TemplateRef, ViewChildren, Input, Directive } from '@angular/core';



@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  routes!: {}[]
 
  constructor(
    
  ) {}

  
  ngOnInit(): void {

    this.routes = [
      { route: 1 },
      { route: 2 },
      { route: 3 },
      { route: 4 },
      { route: 5 },
      { route: 6 },
      { route: 7 },
      { route: 8 },
      { route: 9 },
      { route: 10 },
      { route: 11 },
      { route: 12 },
      { route: 13 },
      { route: 14 },
      { route: 15 },
      { route: 16 },
      { route: 17 },

      
    ]


    };

}



