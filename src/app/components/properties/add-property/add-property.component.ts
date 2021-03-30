import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  enteredName = '';
  enteredAddress = '';
  isLoading: Boolean = false;
  mode = 'add';
  propertyId!: string;
  property!: Property;

  constructor(
    public propertyService: PropertyService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('propertyId')) {
        this.mode = 'add';
        this.propertyId = paramMap.get('propertyId');
        this.property = this.propertyService.getProperty('propertyId');
      } else {
        this.mode = 'add';
        this.propertyId = '';
      }
    });
  }

  onAddProperty(form: NgForm) {
    if (form.invalid) {
      console.log('form is invalid');
      return;
    } else {
      this.propertyService.addProperty(form.value.name, form.value.address);
      form.resetForm();
    }
  }
}
