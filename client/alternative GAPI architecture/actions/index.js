import { UPDATE_SIGN_IN_STATUS } from './types';
import GoogleAuth from '../api/googleAuth';

const googleAuth = new GoogleAuth();

export const initGoogleAuth = () => (dispatch) => {
    googleAuth
        .init()
        .then((googleAuth) => {
            dispatch(updateSignInStatus());
            googleAuth.signInListen(() => dispatch(updateSignInStatus()));
        })
        .catch((error) => console.error(error));
};

const updateSignInStatus = () => (dispatch) => {
    const isSignedIn = googleAuth.isSignedIn();
    const userId = googleAuth.userId();

    dispatch({
        type: UPDATE_SIGN_IN_STATUS,
        payload: { isSignedIn, userId }
    });
};

export const signIn = () => (dispatch) => googleAuth.signIn();
export const signOut = () => (dispatch) => googleAuth.signOut();
