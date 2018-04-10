import {
    SET_TERM,
    DATA_RESET,
    DATA_UPDATE,
    OFFSET_RESET,
    OFFSET_INC
} from '../constants/searchConst'

const initialState = {
    searchTerm: '',
    offset: 0,
    data: []
};

export default function search(state = initialState, action) {
    switch(action.type) {
        case SET_TERM:
            return {...state, searchTerm: action.payload};

        case DATA_RESET:
            return {...state, data: action.payload};

        case DATA_UPDATE:
            return {...state, data: state.data.concat(action.payload)};

        case OFFSET_RESET:
            return {...state, offset: 0};

        case OFFSET_INC:
            return {...state, offset: state.offset + action.payload};

        default:
            return state;
    }
}
