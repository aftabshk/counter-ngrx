import { Action } from '@ngrx/store';

export const IncrementAction = '[Count Action] Increment';

export class Increment implements Action {
  readonly type = IncrementAction;
}
