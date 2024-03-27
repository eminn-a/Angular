import { ValidatorFn } from '@angular/forms';

export function emailVallidator(domains: string[]): ValidatorFn {
  //[A-Za-z0-9]+@gmail\.(bg|com)--regex
  const domainStrings = domains.join('|');
  const regExp = new RegExp(`[A-Za-z0-9]+@gmail\.(bg|com)`);

  return (control) => {
    const isEmailInValid = control.value === '' || regExp.test(control.value);
    // console.log('testRegex ', isEmailInValid, control.value);
    return isEmailInValid ? null : { emailVallidator: true };
  };
}
