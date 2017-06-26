import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Typeahead } from 'ng2-typeahead';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Typeahead
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
