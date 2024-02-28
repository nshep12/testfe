import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }