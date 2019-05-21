import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { countReducer } from './app.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({ counter: countReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
