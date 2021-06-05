import React, { useState, useLayoutEffect } from 'react';
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import PageTitle from '../../components/PageTitle';
import UseInputControl from './useInputControl';
import { useAuthDispatch, useAuthState } from '../../context/auth-context';
import { fetchCurrentUserData, fetchToken } from '../../services/axios';
import { loginError, loginRequest, loginSuccess } from './dispatches';
import BoxBorder from '../../components/BoxBorder';
import { useAlertsState } from '../../context/alert-context/alert-context';





export default function Login() {

    const [username, setUsername] = UseInputControl('');
    const [password, setPassword] = UseInputControl('');
    const [token, setToken] = useState(null);
    const dispatch = useAuthDispatch();
    const { loading } = useAuthState();
    const { showAlert } = useAlertsState();
    const [FormLoading, setFormLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setFormLoading(true);
        fetchToken(username, password).then(
            (data) => {
                if (data.success) {
                    setToken(data.token)
                }
                else {
                    showAlert({message: data.error, status: "error"});
                    dispatch(loginError(data.error));
                }
                setFormLoading(false);
            }
        )
    }

    useLayoutEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            dispatch(loginRequest());
            setToken(savedToken);
        }
    }, [dispatch, token]);

    useLayoutEffect(() => {
        if (token) {
            fetchCurrentUserData(token).then(
                ({ data, success }) => {
                    if (success) {
                        localStorage.setItem('token', token);
                        dispatch(loginSuccess(token, data));
                        showAlert({message: "login success", status: "success"});
                    }
                    else {
                        setToken(null);
                        localStorage.removeItem('token');
                    }
                }
            );
        }
    }, [token, dispatch, showAlert]);

    return (
        <>
            {!loading &&
                <BoxBorder>
                    <PageTitle>Login Page</PageTitle>

                    <form onSubmit={handleSubmit} method="post" >

                        <FormInput
                            name="username"
                            value={username}
                            handler={setUsername} />

                        <FormInput
                            name="password"
                            type="password"
                            value={password}
                            handler={setPassword} />

                        <FormButton isLoading={FormLoading} />

                    </form>
                </BoxBorder>
            }
        </>
    )
}
