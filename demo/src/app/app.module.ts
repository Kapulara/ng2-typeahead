import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as Typeahead from 'ng2-typeahead';

console.log(Typeahead)

@NgModule({
  declarations: [
    AppComponent,
    Typeahead.Typeahead
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
