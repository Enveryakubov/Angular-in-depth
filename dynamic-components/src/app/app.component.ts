import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // modal = false;

  @ViewChild(RefDirective) refDir!: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Some fantastic title here!');
    meta.addTags([
      { name: 'keywords', content: 'Some specific keywords here' },
      { name: 'description', content: 'Some description here' },
    ]);
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.title = 'My Dynamic Component';

    component.instance.close.subscribe(() => this.refDir.containerRef.clear());
  }
}
