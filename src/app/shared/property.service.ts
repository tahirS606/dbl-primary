import { Property } from './../models/property.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: Property[] = [];
  private propertiesUpdated = new Subject<Property[]>();

  private updatedProperties: any;

  constructor(private http: HttpClient) {}

  getProperty(id: string) {
    return {
      ...this.properties.find((p) => {
        p.id === id;
      }),
    };
  }

  getProperties() {
    this.http
      .get<{ message: string; properties: any }>(
        'http://localhost:3000/properties'
      )
      .pipe(
        map((propertyData) => {
          return propertyData.properties.map((property: any) => {
            return {
              name: property.name,
              address: property.address,
              id: property._id,
            };
          });
        })
      )
      .subscribe((transformedProperties) => {
        this.properties = transformedProperties;
        this.propertiesUpdated.next([...this.properties]);
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
        const propertyId = responseData.propertyId;
        property.id = propertyId;
        this.properties.push(property);
        this.propertiesUpdated.next([...this.properties]);
      });
  }

  // updateProperty(name: string, address: string) {
  //   const property: Property = { id: id, name: name, address: address };
  // }

  deleteProperty(propertyId: string) {
    this.http
      .delete('http://localhost:3000/properties/' + propertyId)
      .subscribe(() => {
        const updatedProperties = this.properties.filter(
          (property) => property.id !== propertyId
        );
        this.properties = updatedProperties;
        this.propertiesUpdated.next([...this.properties]);
      });
  }
}
