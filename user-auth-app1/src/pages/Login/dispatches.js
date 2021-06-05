import { actinosTypes } from "../../context/auth-context/reducer";

export function loginRequest() {
    return {
        type: actinosTypes.LOGIN_REQUEST
    }
}

export function loginSuccess(token, user) {
    return {
        type: actinosTypes.LOGIN_SUCCESS,
        payload: {
            user,
            token
        }
    }
}

export function loginError(error) {
    return {
        type: actinosTypes.LOGIN_ERROR,
        payload: {
            error,
        }
    }
}

export function logout() {
    return {
        type: actinosTypes.LOGOUT,
    }
}

