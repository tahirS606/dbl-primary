import { PropertyService } from './../../../shared/property.service';

import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  enteredName = '';
  enteredAddress = '';

  constructor(public propertyService: PropertyService) {}

  onAddProperty(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.propertyService.addProperty(form.value.name, form.value.address);
    form.resetForm();
  }
}
