import {CvModel} from '../app-store.dictionary';


export enum newCvActions {
  UPDATE = 'UPDATE',
  RESET = 'RESET',
  SET = 'SET'
}

class Action {
  type: newCvActions;
  payload: CvModel;
}

let defaultState: CvModel;

export function newCvReducer(state: CvModel, action: Action) {
  switch (action.type) {
    case newCvActions.SET:
      defaultState = action.payload;
      return state = action.payload;
    case newCvActions.UPDATE:
      return state = action.payload;
    case newCvActions.RESET:
      return state = defaultState;
    default:
      return state;
  }
}
