import { PropertyService } from './../../services/property.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Property } from './../../models/property.model';

import { Component, OnInit } from '@angular/core';
import { property } from 'lodash';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  
  properties?: Property[]
  selectedRoute!: any;

  constructor(
    private propertyService : PropertyService,
    private route: ActivatedRoute,
    private http: HttpClient) 
    {}

  


  ngOnInit(): void {

    this.selectedRoute = this.route.snapshot.paramMap.get('route');
    console.log('route', this.selectedRoute)

    console.log(
    this.propertyService.getPropertiesByRoute(this.selectedRoute)
    )
    }
 
    
    }


    // .subscribe(
      // (propertyData: { properties: Property[]; propertiesCount: number }) => {
      //   this.isLoading = false;
      //   this.totalProperties = propertyData.propertiesCount;
      //   this.properties = propertyData.properties;
      // }
  


