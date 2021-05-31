
import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PropertyService } from './../services/property.service';

import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  routes: any = []
  properties!: Property[]
  private propertiesUpdated = new Subject<{
    properties: Property[];
    propertiesCount: number;
  }>();
  displayProperties:[] = []

  private updatedProperties: any;

  uniqueOperator = _.uniq

  constructor(
    private propertyService: PropertyService,
    private http: HttpClient
  ) { 

  }
  

  ngOnInit(): void {

    this.http
    .get<{ properties: any }>(
      'http://localhost:3000/properties'
    )
    .pipe(
      map((propertyData) => {
        return {
          routes: propertyData.properties.map((property: any) => {
            
            return {
              route: property.route
            };

          }),
      
        };

      })
    )
    .subscribe((routeData) => {
      this.routes = routeData.routes;
      console.log(routeData)
      console.log('this.routes', this.routes)
      });

    };

}



