import { Action } from '@ngrx/store';
import { IncrementAction, Increment } from './app.actions';

export const initialState = 0;

export function countReducer(state = initialState, action: Increment): number {
  switch (action.type) {
    case IncrementAction:
      return state + action.payload;
    default:
      console.log('Reducers trigerred');
      return state;
  }
}
