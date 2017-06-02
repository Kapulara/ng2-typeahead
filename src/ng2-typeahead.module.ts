import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Typeahead } from './ng2-typeahead'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        Typeahead
    ],
    providers: [],
    bootstrap: []
})
export class TypeaheadModule { }
