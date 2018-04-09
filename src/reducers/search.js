const initialState = {
    searchTerm: 'car',
    offset: 0,
};

export default function search (state = initialState, action) {
    switch (action.type) {
        case 'SET_TERM':
            return {...state, searchTerm: action.payload}

        default:
            return state;
    }
}