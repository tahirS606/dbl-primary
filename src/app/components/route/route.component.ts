import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Property } from './../../models/property.model';
import { PropertyService } from './../services/property.service';
import { Component, OnInit } from '@angular/core';
import { property } from 'lodash';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  
  properties!: Property[]

  
  selectedRoute!: any;

  constructor(
    private propertyService : PropertyService,
    private route: ActivatedRoute,
    private http: HttpClient) 
    {}

   getPropertyByRoute(route: number) {
    return this.http.get<{id: string, name: string, address: string, route: number, latitude: number, longitude: number}>(
      'http://localhost:3000/properties/').subscribe()
  }

  ngOnInit(): void {

    this.selectedRoute = this.route.snapshot.paramMap.get('route');

    this.getPropertyByRoute(this.selectedRoute)
      

   
    }
 
    
    }

  


