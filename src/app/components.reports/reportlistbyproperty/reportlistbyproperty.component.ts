import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportlistbyproperty',
  templateUrl: './reportlistbyproperty.component.html',
  styleUrls: ['./reportlistbyproperty.component.css']
})
export class ReportlistbypropertyComponent implements OnInit {

  propertyId!: any

  constructor(
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');

  }

}
