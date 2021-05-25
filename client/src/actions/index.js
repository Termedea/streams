import { actionTypes, apis } from '../constants';
import streams from '../apis/streams';

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

export const createStream = (formValues) => async (dispatch) => {
    const response = await streams.post(apis.STREAMS, formValues);

    dispatch({ type: actionTypes.CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get(apis.STREAMS);

    dispatch({ type: actionTypes.FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`${apis.STREAMS}${id}`);
    dispatch({ type: actionTypes.FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.put(`${apis.STREAMS}${id}`, formValues);
    dispatch({ type: actionTypes.EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(id);
    dispatch({ type: actionTypes.DELETE_STREAM, payload: id });
};
