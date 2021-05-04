import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from './../../shared/property.service';
import { Property } from './../../models/property.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  property!: Property; 
  
  propertyId!: any; 

  date = new Date()

  constructor(private propertyService: PropertyService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    console.log(this.propertyId)
        this.propertyService
          .getProperty(this.propertyId)
          .subscribe((propertyData) => {
            this.property = {
              id: propertyData._id,
              name: propertyData.name,
              address: propertyData.address,
              latitude: propertyData.latitude, 
              longitude: propertyData.longitude
            };

            console.log('this.property', this.property) 

    });
    
  }
}
