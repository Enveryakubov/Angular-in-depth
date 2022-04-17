import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInerceptor } from './auth.interceptor';

const INTERCEPTOR_AUTH: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInerceptor,
  multi: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [INTERCEPTOR_AUTH],
  bootstrap: [AppComponent],
})
export class AppModule {}
