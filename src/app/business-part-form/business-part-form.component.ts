import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SqlOrderFormComponent } from '../sql-order-form/sql-order-form.component';
import * as BusinessValidator from './validators/business.validator';



@Component({
  selector: 'app-business-part-form',
  templateUrl: './business-part-form.component.html',
  styleUrls: ['./business-part-form.component.css']
})


export class BusinessPartFormComponent implements OnInit {


  @Input() businessForm: FormGroup;
  displayDatePicker;




  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void { }

  }
