import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import * as BusinessValidator from '../business-part-form/validators/business.validator';

@Component({
  selector: 'app-sql-order-form',
  templateUrl: './sql-order-form.component.html',
  styleUrls: ['./sql-order-form.component.css']
})
export class SqlOrderFormComponent implements OnInit {
  sqlForm: FormGroup;
  displayDatePicker;


  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.sqlForm = this.formBuilder.group({
      businessForm: this.formBuilder.group({
        requestorName: ['', Validators.required],
        requestorSurname: ['', Validators.required],
        userPID: ['', BusinessValidator.userPIDValidator],
        email: [''],
        projectName: [''],
        prCode: ['', BusinessValidator.prCodeValidator],
        dataOwner: ['', Validators.required],
        dataSteward: ['', Validators.required],
        projectDescription: [''],
        businessJustification: [''],
        deadline: ['', Validators.required],
        deadlineDate: ['']
      }),
      connectionString: ['', Validators.required]
    });

    this.sqlForm.valueChanges.subscribe();
    }
}
