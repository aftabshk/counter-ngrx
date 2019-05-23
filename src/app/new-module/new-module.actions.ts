import { Action } from '@ngrx/store';

export const DecrementAction = '[Counter Action] Decrement';

export class Decrement implements Action {
  readonly type = DecrementAction;
}
