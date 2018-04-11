import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants/сontentConst';

const initialState = {
  selected: false,
};

export default function content(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, selected: action.payload };

    case CLOSE_MODAL:
      return { ...state, selected: false };

    default:
      return state;
  }
}
