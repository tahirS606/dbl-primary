import { PropertyService } from './../../services/property.service';
import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  constructor(private propertyService: PropertyService
    ) { }

  ngOnInit(): void {
   
    
  }
}


