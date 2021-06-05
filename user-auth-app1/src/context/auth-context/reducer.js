
export const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null
}

export const actinosTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT'
}

export const reducer = (state, action) => {
    const {
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        LOGOUT
    } = actinosTypes;

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                user: null,
                token: null,
                loading: true,
                error: null
            }
        case LOGIN_SUCCESS:
            const { user, token } = action.payload;

            return {
                ...state,
                user,
                token,
                loading: false,
                error: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                error: action.payload.error
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                error: null
            }
        default:
            throw Error(`action type : ${action.type} not allowed!`);
    }
}