import {CvModel} from '../models';


export enum cvCollectionActions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

class Action {
  type: cvCollectionActions;
  payload: CvModel;
}

const defaultState: Array<CvModel> = [{
  city: 'Kiev',
  phone: '00000000000',
  birthday: {
    day: '',
    month: '',
    year: '',
  },
  sex: 'Men',
  zeroJobExperience: false,
  lastJob: {
    companyName: 'Apple',
    companyIndustry: 'Rocket Sience',
    position: 'Dev',
    period: {
      from: { month: '', year: ''},
      to: { month: '', year: ''},
      forNow: false
    }
  },
  wantedPosition: {
    position: '111',
    section: ['IT']
  }
}];

export function cvCollectionReducer(state: Array<CvModel> = defaultState, action: Action) {
  switch (action.type) {
    case cvCollectionActions.ADD:
      return state = [...state, action.payload];

    case cvCollectionActions.REMOVE:
      return state = [...state, action.payload];

    default:
      return state;
  }
}
