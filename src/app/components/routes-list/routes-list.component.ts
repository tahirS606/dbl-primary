import { Subscription } from 'rxjs';
import { PropertyService } from './../services/property.service';
import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  routes!: any

  constructor(
    private propertyService: PropertyService
  ) { 

    
  }

  ngOnInit(): void {

    this.routes = this.propertyService.getAllRoutes()

    console.log(this.routes)

  }
}

