import { UserActionTypes } from "./action-types";

const initialState = {
    currentUser: null
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {...state, currentUser: action.payload}

        case UserActionTypes.LOGGOUT:
            return {...state, currentUser: null}

        default:
            return state;
    }
}

export default userReducer;