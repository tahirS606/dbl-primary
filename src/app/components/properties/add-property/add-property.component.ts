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
  // mode = 'add';

  property!: Property;

  constructor(
    public propertyService: PropertyService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   let propertyId = params['propertyId'];
    //   console.log(propertyId);
    // });
    this.isLoading = true;
  }

  onAddProperty(form: NgForm) {
    if (form.invalid) {
      console.log('form is invalid');
      return;
    }
    this.propertyService.addProperty(form.value.name, form.value.address);
    form.resetForm();
  }
}
