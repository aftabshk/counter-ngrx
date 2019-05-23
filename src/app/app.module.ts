import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { countReducer } from './app.reducers';
import { NewModuleModule } from './new-module/new-module.module';
import { DecComponent } from './dec/dec.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: countReducer }),
    StoreDevtoolsModule.instrument(),
    NewModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent, DecComponent]
})
export class AppModule {}
