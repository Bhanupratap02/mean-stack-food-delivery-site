import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
const VALIDATORS_MESSAGE: any = {
  required: 'This field is required',
  email: 'Email is not valid',
  minLength: 'Field is too short',
  notMatch: 'Password and Confirm Password does not match',
};
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css'],
})
export class InputValidationComponent implements OnChanges, OnInit {
  @Input() control!: AbstractControl;
  @Input() showErrorWhen: boolean = true;
  errorMessages: string[] = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }
  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map((key) => VALIDATORS_MESSAGE[key]);
  }
}
