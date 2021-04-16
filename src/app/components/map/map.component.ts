import { Property } from './../../models/property.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'], 
  
})
  
export class MapComponent implements OnInit{

  property!: Property; 

  latitude: number = 51.509865;
  longitude: number = -0.118092;
  type = "satellite";

  ngOnInit() {
  }

}


