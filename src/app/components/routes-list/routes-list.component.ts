import { Subscription } from 'rxjs';
import { PropertyService } from './../services/property.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  routes: any = []

  constructor(
    private propertyService: PropertyService
  ) { 

    
  }

  ngOnInit(): void {

    

    this.propertyService.getAllRoutes().subscribe(data => {
      this.routes.push(data)
      
      console.log('this.routes index 1', this.routes)
    })
  }
}

