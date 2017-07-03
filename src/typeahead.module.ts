import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { Typeahead } from './typeahead.component'

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
    exports: [
        Typeahead
    ],
    providers: [],
    bootstrap: []
})
export class TypeaheadModule { }
