import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'branded-spinner',
  templateUrl: './branded-spinner.component.html',
  styleUrls: ['./branded-spinner.component.css']
})
export class BrandedSpinnerComponent 
implements OnInit {

  isLoading!: boolean; 


  constructor() { }

  ngOnInit(): void {
  }

}
