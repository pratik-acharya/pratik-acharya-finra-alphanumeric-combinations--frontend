import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';
import { HttpClientModule } from '@angular/common/http';
import { AlphaNumericCombinationsComponent } from './alpha-numeric-combinations/alpha-numeric-combinations.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberInputComponent,
    AlphaNumericCombinationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
