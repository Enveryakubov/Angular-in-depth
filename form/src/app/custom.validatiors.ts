import { AsyncValidatorFn, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidator {
  static restrictedEmail(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (['test@mail.ru'].includes(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static uniqueEmail(control: any): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({ uniqueEmail: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
