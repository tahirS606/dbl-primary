import { Property } from '../models/property.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: Property[] = [];
  private propertiesUpdated = new Subject<{
    properties: Property[];
    propertiesCount: number;
  }>();
  private updatedProperties: any;

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
              };
            }),
            maxProperties: propertyData.maxProperties,
          };
        })
      )
      .subscribe((transformedPropertyData) => {
        this.properties = transformedPropertyData.properties;
        this.propertiesUpdated.next({
          properties: [...this.properties],
          propertiesCount: transformedPropertyData.maxProperties,
        });
      });
  }

  getPropertyUpdateListener() {
    return this.propertiesUpdated.asObservable();
  }

  addProperty(name: string, address: string) {
    const property: Property = { id: '', name: name, address: address };
    this.http
      .post<{ message: string; propertyId: string }>(
        'http://localhost:3000/properties',
        property
      )
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  getProperty(id: string) {
    return this.http.get<{ _id: string; name: string; address: string }>(
      'http://localhost:3000/properties/' + id
    );
  }

  updateProperty(id: string, name: string, address: string) {
    const property: Property = { id: id, name: name, address: address };
    this.http
      .put('http://localhost:3000/properties/' + id, property)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

  deleteProperty(propertyId: string) {
    return this.http.delete('http://localhost:3000/properties/' + propertyId);
  }
}
