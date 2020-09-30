import { AbstractControl } from '@angular/forms';


export function userPIDValidator(control: AbstractControl): { [key: string]: boolean} | null {
  if (!control.value.match('[0-9]{6}')){
    return {
      userPIDValidator: false
    };
  }
  return null;
}

export function prCodeValidator(control: AbstractControl): { [key: string]: boolean} | null {
  if (!control.value.match('PR-[0-9]{6}')){
    return {
      prCodeValidator: false
    };
  }
  return null;
}

// export function isDeadline(control: AbstractControl): { [key: string]: boolean} | null {
//   if (control.value.match('True')){
//     return {
//       isDeadline: true
//     };
//   }
//   return null;
// }

