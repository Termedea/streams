import { UPDATE_SIGN_IN_STATUS } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SIGN_IN_STATUS:
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn,
                userId: action.payload.userId
            };
        default:
            return state;
    }
};
