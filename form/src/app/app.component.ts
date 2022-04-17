import { Component, NgIterable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validatiors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  test!: FormArray;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [
          Validators.email,
          Validators.required,
          CustomValidator.restrictedEmail,
        ],
        [CustomValidator.uniqueEmail]
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([]),
    });

    // @ts-ignore: Unreachable code error
    this.test = this.form.get('skills');
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }

  setCapital() {
    const cityMap: any = {
      ru: 'Москва',
      by: 'Минск',
      ua: 'Киев',
    };
    const country = this.form.get('address')?.get('country')?.value;
    this.form.patchValue({ address: { city: cityMap[country] } });
  }
  addSkill() {
    const skill = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(skill);
    (this.form.get('skills') as FormArray).push(skill);
  }
}
