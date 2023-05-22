const initialState = {
    cats: []
};

export default function catReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, action.payload]};
        case 'REMOVE_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
        case 'EDIT_CAT':
            return {...state, cats: state.cats.map(cat => cat.id === action.payload.id ? action.payload : cat)};
        default:
            return state;
    }
}

