import {CvModel} from '../app-store.dictionary';


export enum cvCollectionActions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TEST = 'TEST',
  RESOLVE = 'RESOLVE'
}

class Action {
  type: cvCollectionActions;
  payload: CvModel;
}

export function cvCollectionReducer(state: Array<CvModel>, action: Action) {
  switch (action.type) {
    case cvCollectionActions.ADD:
      return state = [...state, action.payload];
    case cvCollectionActions.REMOVE:
      return state = [...state, action.payload];
    case cvCollectionActions.TEST:
      console.log( ' in reduser ');
      return state;
    case cvCollectionActions.RESOLVE:
      console.log( ' in reduser ', action );
      return state = (action.payload as any);
    default:
      return state;
  }
}
