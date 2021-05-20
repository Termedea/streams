import { INITIAL_STATE, actionTypes } from '../constants';

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return { ...state, isSignedIn: true, userProfile: action.payload };
        case actionTypes.SIGN_OUT:
            return { ...state, isSignedIn: false, userProfile: null };
        default:
            return state;
    }
};

export default authReducer;
