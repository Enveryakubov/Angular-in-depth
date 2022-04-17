import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { MultbyPipe } from './pipes/multby.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, StyleDirective, MultbyPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
