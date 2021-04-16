import { map } from 'rxjs/operators';
import { Property } from './../../models/property.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from './../../shared/property.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  id!: string;
  property!: Property;

  constructor(
    private router: Router,
    private propertyService: PropertyService,
    private route: ActivatedRoute,
   
  ) { }


  ngOnInit(){
    this.id = this.route.snapshot.params.propertyId;

    console.log(this.route)
    console.log('id', this.id)
    this.propertyService.getProperty(this.id)

    console.log(this.propertyService.getProperty(this.id))
  
  }


}