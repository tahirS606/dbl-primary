import { Property } from './../models/property.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: Property[] = [];
  private propertiesUpdated = new Subject<Property[]>();

  constructor(private http: HttpClient) {}

  getProperties() {
    this.http
      .get<{ message: string; properties: Property[] }>(
        'http://localhost:3000/properties'
      )
      .subscribe((propertyData) => {
        this.properties = propertyData.properties;
        this.propertiesUpdated.next([...this.properties]);
      });
  }

  getPropertyUpdateListener() {
    return this.propertiesUpdated.asObservable();
  }

  addProperty(name: string, address: string) {
    const property: Property = { id: '', name: name, address: address };
    this.http
      .post<{ message: string }>('http://localhost:3000/properties', property)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.properties.push(property);
        this.propertiesUpdated.next([...this.properties]);
      });
  }
}
