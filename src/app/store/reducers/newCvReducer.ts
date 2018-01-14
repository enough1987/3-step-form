import {CvModel} from '../app-store.dictionary';


export enum newCvActions {
  UPDATE = 'UPDATE',
  RESET = 'RESET'
}

class Action {
  type: newCvActions;
  payload: CvModel;
}

const defaultState: CvModel = {
  city: 'Kiev',
  phone: '',
  birthday: {
    day: '',
    month: '',
    year: '',
  },
  sex: 'Men',
  zeroJobExperience: false,
  lastJob: {
    companyName: '',
    companyIndustry: '',
    position: '',
    period: {
      from: {
        month: '',
        year: ''
      },
      to: {
        month: '',
        year: ''
      },
      forNow: false
    }
  },
  wantedPosition: {
    position: '',
    section: []
  }
};

export function newCvReducer(state: CvModel = defaultState, action: Action) {
  switch (action.type) {
    case newCvActions.UPDATE:
      return state = action.payload;
    case newCvActions.RESET:
      return state = defaultState;
    default:
      return state;
  }
}
