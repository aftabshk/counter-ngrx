import * as fromActions from './new-module.actions';

const initialState: number = 0;

export function decrementReducer(
  state: number = initialState,
  action: fromActions.Decrement
): number {
  switch (action.type) {
    case fromActions.DecrementAction:
      return state - 10;
    default:
      console.log('Naruto');
      return state;
  }
}
