import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PropertyService } from './../services/property.service';

import { Component, OnInit } from '@angular/core';

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

  private updatedProperties: any;

  constructor(
    private propertyService: PropertyService,
    private http: HttpClient
  ) { 

    
  }

  ngOnInit(): void {

    this.http
    .get<{ message: string; properties: any; maxProperties: number }>(
      'http://localhost:3000/properties'
    )
    .pipe(
      map((propertyData) => {
        return {
          properties: propertyData.properties.map((property: any) => {
            return {
              name: property.name,
              address: property.address,
              id: property._id,
              route: property.route
            };
          }),
          maxProperties: propertyData.maxProperties,
        };
      })
    )
    .subscribe((routeData) => {
      this.properties = routeData.properties;
      this.propertiesUpdated.next({
        properties: [...this.properties],
        propertiesCount: routeData.maxProperties,
      });

      console.log('this.properties in route list', this.properties)
    });
}

}

