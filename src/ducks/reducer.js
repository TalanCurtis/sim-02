// Initial State
let initialState = {
    wizard: {
        user_id: '',
        name: '',
        description: '',
        address: '',
        city: '',
        state: '',
        zip: 0,
        image: '',
        loan: 0,
        mortgage: 0,
        desired_rent: 0,
        recommended_rent: 0
    }
}

// Constants
// const UPDATE_PROPERTY = 'UPDATE_PROPERTY'
// const ADD_PROPERTY = 'ADD_PROPERTY'
const DELETE_PROPERTY = 'DELETE_PROPERTY'
const UPDATE_WIZARD = 'UPDATE_WIZARD'
const CANCEL_WIZARD = 'CANCEL_WIZARD'

// Action Builders
// export function addProperty(property) {
//     console.log('addProperty:', property)

//     return {
//         type: ADD_PROPERTY,
//         payload: property
//     }
// }
export function updateWizard(property) {
    // console.log('updateProperty:', property)

    return {
        type: UPDATE_WIZARD,
        payload: property
    }
}
export function cancelWizard() {

    return {
        type: UPDATE_WIZARD,
        payload: initialState.wizard
    }
}



// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        // case ADD_PROPERTY:
        //     // return  Object.assign({}, state, ...state.user, action.payload);
        //     return {...state,
        //             user: {
        //                 ...state.user, username:action.payload.username
        //             }
        //     }
        case UPDATE_WIZARD:
            return { ...state, wizard: action.payload }
        case CANCEL_WIZARD:
            return { ...state, wizard: action.payload }

        case DELETE_PROPERTY:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}
