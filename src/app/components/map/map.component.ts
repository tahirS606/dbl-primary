import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: "./map.component.html",
  styleUrls:  ["./map.component.css"]
  
})
  
export class MapComponent implements OnInit {

  
  latitude!: 33.448376;
  longitude!: -112.074036;
  
  
  constructor() {
  }
  ngOnInit() {
    
  }
}
