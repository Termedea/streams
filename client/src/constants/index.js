export const actionTypes = {
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
    LOGGEDIN_STATUS: 'LOGGEDIN_STATUS',
    CREATE_STREAM: 'CREATE_STREAM',
    FETCH_STREAMS: 'FETCH_STREAMS',
    FETCH_STREAM: 'FETCH_STREAM',
    EDIT_STREAM: 'UPDATE_STREAM',
    DELETE_STREAM: 'DELETE_STREAM'
};

export const apis = {
    STREAMS: '/streams/'
};

export const formTypes = {
    STREAM_CREATE: 'streamCreate'
};

export const INITIAL_STATE = {
    isSignedIn: null,
    userProfile: null
};
