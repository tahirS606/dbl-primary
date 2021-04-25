import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: "./map.component.html",
  styleUrls:  ["./map.component.css"]
  
})
  
export class MapComponent implements OnInit {

  latitude!: 51;
  longitude!: 8;
  
  
  constructor() {
  }
  ngOnInit() {
    
  }
}
