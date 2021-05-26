import { Property } from './../../models/property.model';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from './../../shared/property.service';
import { ReportService } from './../services/report.service';
import { Report } from './../../models/report.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {

  reports!: Report[];
  propertyId!: any; 
  property!: Property; 

  constructor(
    private propertyService:PropertyService,
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {

    this.propertyId = this.activatedRoute.snapshot.paramMap.get('propertyId');

   console.log(this.propertyId)

  //  then pass to report filter in report service

  // modeling below =>
    
        // this.propertyService
        //   .getProperty(this.propertyId)
        //   .subscribe((propertyData) => {
        //     this.property = {
        //       id: propertyData._id,
        //       name: propertyData.name,
        //       address: propertyData.address,
        //       route: propertyData.route, 
        //       latitude: propertyData.latitude, 
        //       longitude: propertyData.longitude
        //     };
    this.reportService(this.propertyId).subscribe(this.reports)=>{
      
    }
    }
    
  }
}
