import { ReportService } from './../../services/report.service';
import { Task } from '../../../models/task.model';

import { Component, OnInit, EventEmitter } from '@angular/core';
import { 
  FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit{
  tasks: Task[] = []
  form: FormGroup;

  
  webData = [
    { id: 1, name: 'Raking' },
    { id: 2, name: 'Mowing' },
    { id: 3, name: 'Weeding' },
    { id: 4, name: 'Blowing' },
    { id: 5, name: 'Trimming' }
  ];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    public reportService: ReportService ) {

    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.addCheckboxesToForm();
  }

  private addCheckboxesToForm() {
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked:Boolean, i:number) => checked ? this.webData[i].id : null)
      // .filter(v => v !== null);
    console.log(selectedOrderIds);
  }

  ngOnInit() {
    
}}
