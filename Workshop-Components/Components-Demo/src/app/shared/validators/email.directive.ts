import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { emailVallidator } from '../utils/emailValidator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];

  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('control', control);
    return this.validator(control);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];
    console.log({ currentValue });

    if (currentValue) {
      this.validator = emailVallidator(currentValue);
    }
  }
}
