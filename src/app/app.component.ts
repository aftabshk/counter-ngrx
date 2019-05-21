import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = this.store.pipe(select('counter'));
  }

  countAction() {
    this.store.dispatch(new Increment());
  }
}
