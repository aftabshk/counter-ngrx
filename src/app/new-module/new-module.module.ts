import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { decrementReducer } from './new-module.reducer';
import { DecComponent } from '../dec/dec.component';

@NgModule({
  declarations: [DecComponent],
  imports: [CommonModule, StoreModule.forFeature('dec', decrementReducer)],
  bootstrap: [DecComponent]
})
export class NewModuleModule {}
