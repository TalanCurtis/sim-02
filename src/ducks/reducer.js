// Initial State
let initialState = {
    user: {
        id: 0,
        username: '',
    },
    properties: []
}

// Constants
// const UPDATE_PROPERTY = 'UPDATE_PROPERTY'
const ADD_PROPERTY = 'ADD_PROPERTY'
const DELETE_PROPERTY = 'DELETE_PROPERTY'

// Action Builders
export function addProperty(property) {
    console.log('addProperty:', property)

    return {
        type: ADD_PROPERTY,
        payload: property
    }
}

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTY:
            // return  Object.assign({}, state, ...state.user, action.payload);
            return {...state,
                    user: {
                        ...state.user, username:action.payload.username
                    }
            }
        case DELETE_PROPERTY:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}
