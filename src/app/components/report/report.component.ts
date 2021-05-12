import { ReportService } from './../services/report.service';
import { Task } from './../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from './../../shared/property.service';
import { Property } from './../../models/property.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  tasks: Task[] = []
  form!: FormGroup;


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

  property!: Property; 
  
  propertyId!: any; 

  date = new Date()

  constructor(private propertyService: PropertyService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public reportService: ReportService,
    ) { 
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

  ngOnInit(): void {

    const fetchedTasks = this.reportService.getTasks().subscribe()

    console.log('fetchedTasks', fetchedTasks)

    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    
        this.propertyService
          .getProperty(this.propertyId)
          .subscribe((propertyData) => {
            this.property = {
              id: propertyData._id,
              name: propertyData.name,
              address: propertyData.address,
              latitude: propertyData.latitude, 
              longitude: propertyData.longitude
            };

    });
    
  }
}
