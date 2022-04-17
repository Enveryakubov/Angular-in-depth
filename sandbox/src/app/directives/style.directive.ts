import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective implements OnInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  @Input('appStyle') color?: string;

  // @HostBinding('style.color') elColor = '';

  @HostListener('mouseover')
  onTest() {
    // this.elColor = this.color || 'red';
    console.log('Hovered!');
  }

  // Creating Smart CSS based on business logic
  ngOnInit(): void {
    if (this.ref.nativeElement.innerText.length > 10) {
      this.renderer.setStyle(
        this.ref.nativeElement,
        'color',
        this.color || 'red'
      );
    } else {
      this.renderer.setStyle(this.ref.nativeElement, 'color', 'green');
    }
  }
}
