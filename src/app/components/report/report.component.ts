import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from './../../shared/property.service';
import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  id!: string; 

  constructor(private propertyService: PropertyService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const propertyId = params.get('propertyId');

      console.log('id', propertyId);

    });
    
  }
}
