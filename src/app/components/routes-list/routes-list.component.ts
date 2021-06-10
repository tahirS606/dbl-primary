import { PropertyService } from './../../services/property.service';


import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, of } from 'rxjs';


import { Component, OnInit, AfterViewInit, TemplateRef, ViewChildren } from '@angular/core';



@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit, AfterViewInit {

  routes: any = []
  routeList: [] =[]
  displayRoutes: [] = []
  properties!: Property[]
  private propertiesUpdated = new Subject<{
    properties: Property[];
    propertiesCount: number;
  }>();
  displayProperties:[] = []

  private updatedProperties: any;


  constructor(
    private propertyService: PropertyService,
    private http: HttpClient,
  ) { 

  }

  ngAfterViewInit():void {
    
}
  
  ngOnInit(): void {

    this.routes = this.http
    .get<{ properties: any }>(
      'http://localhost:3000/properties'
    )
    .pipe(
      map((propertyData) => {
        return {
          routes: propertyData.properties
          .map((property: any) => {
            return {route: property.route}
          })

          // const unique = [...new Set(this.routes)]
        };
      })

    )
    .subscribe((routeData) => {
      
      this.routes = routeData.routes
      console.log('this.routes', routeData)
      console.log('this.routes', this.routes)
      });


    };

}



