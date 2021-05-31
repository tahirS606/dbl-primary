import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: Property[] = [];
  private _properties = new Subject <Property[]>();

  private propertiesUpdated = new Subject<{
    properties: Property[];
    propertiesCount: number;
  }>();
  private updatedProperties: any;
  routes: any; 

  constructor(private http: HttpClient, private router: Router) {}

  getProperties(propertiesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${propertiesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; properties: any; maxProperties: number }>(
        'http://localhost:3000/properties' + queryParams
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
      });
  }

  getPropertyUpdateListener() {
    return this.propertiesUpdated.asObservable();
  }

  addProperty(name: string, address: string, route: number, latitude: number, longitude: number) {

    const property: Property = { id: '', name: name, address: address, route: route, latitude: latitude, longitude: longitude }
    this.http
      .post<{ message: string; propertyId: string }>(
        'http://localhost:3000/properties',
        property, 
      )
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
      
  }

  getProperty(id: string) {
    return this.http.get<{ _id: string; name: string; address: string; route: number, latitude: number; longitude: number }>(
      'http://localhost:3000/properties/' + id
    )
  }



  baseUrl='http://localhost:3000/'




 

  getPropertyDataforNewReport(id: string){
    const property = this.http.get<{ _id: string; name: string; address: string; route: number, latitude: number; longitude: number }>(
      'http://localhost:3000/new-report/' + id
    );

  }

  getPropertyforReport(id: string) {
    return this.http.get<{ _id: string; name: string; address: string; route: number, latitude: number; longitude: number }>(
      'http://localhost:3000/properties/' + id
    );
  }

  updateProperty(id: string, name: string, address: string, route: number, longitude: number, latitude: number ) {
    const property: Property = { id: id, name: name, address: address, route: route, longitude: longitude, latitude: latitude };
    this.http
      .put('http://localhost:3000/properties/' + id, property)
      .subscribe((response) => {
        this.router.navigate(['/']);
        return response
      });
  }

  deleteProperty(propertyId: string) {
    return this.http.delete('http://localhost:3000/properties/' + propertyId);
  }

}
