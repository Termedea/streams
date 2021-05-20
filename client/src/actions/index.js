import { actionTypes } from '../constants';

export const signIn = (userProfile) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: {
            id: userProfile.getId(),
            email: userProfile.getEmail(),
            name: userProfile.getName()
        }
    };
};

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    };
};

export const getLoggedInStatus = () => {
    return {
        type: actionTypes.LOGGEDIN_STATUS
    };
};
