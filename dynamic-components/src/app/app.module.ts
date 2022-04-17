import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@NgModule({
  declarations: [AppComponent, ModalComponent, RefDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
