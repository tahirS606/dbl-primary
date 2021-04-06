import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  lat = 28.70406;
  long = 77.102493;
  googleMapType = 'satellite';

  constructor() {}

  ngOnInit(): void {}
}
