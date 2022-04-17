import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true,
};

@Component({
  selector: 'app-switch',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR],
  template: `
    <div>
      <button
        class="btn  mx-3"
        [class.active]="state === 'on'"
        (click)="setState('on')"
      >
        On
      </button>
      <button
        class="btn"
        [class.active]="state === 'off'"
        (click)="setState('off')"
      >
        Off
      </button>
    </div>
  `,
})
export class SwitchComponent implements ControlValueAccessor {
  state = 'off';

  private onChange(value: any) {}

  constructor() {}
  writeValue(obj: any): void {
    this.state = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  setState(s: string) {
    this.state = s;
    this.onChange(this.state);
  }
}
