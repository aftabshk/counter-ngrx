import { Action } from '@ngrx/store';
import { IncrementAction } from './app.actions';

export const initialState = 0;

export function countReducer(state = initialState, action: Action): number {
  switch (action.type) {
    case IncrementAction:
      return state + 1;
    default:
      return state;
  }
}
