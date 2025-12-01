import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, LoginContainer, Title, LoginButtonWrapper, Input, ErrorText, RegisterContainer, RegisterText, LogoWrapper } from './LoginStyle';
// import { globalStyles } from '../../styles/globalStyles'; // No longer needed directly here for styling
import api from '../../api/api';
import { saveToken } from '../../api/authUtils';

const LoginScreen = () =>
{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<string>('');
    const navigate = useNavigate();

    const doLogin = async () =>
    {
        try
        {
            const response = await api(
                'auth/login',
                'POST',
                {email, password}
            );
            if (response.status === 'error')
            {
                setErrors(response.data);
                return;
            }
            await saveToken(response.data.data.accessToken, 'token');
            await saveToken(response.data.data.refreshToken, 'refresh');
            navigate('/home');

            setErrors('');

            alert('Login Successful! You are now logged in.');
        }
        catch (e)
        {
            console.error(e);
            alert('An error occurred during login.');
        }
    };

    return (
        <LoginContainer>
            <LogoWrapper>
                <img
                    src="/assets/images/quizophilia-high-resolution-logo-white-transparent.png"
                    alt="Quizophilia Logo"
                    style={{ width: 250, height: 157 }}
                />
            </LogoWrapper>

            <FormContainer>
                <Title>Email</Title>
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <Title>Password</Title>
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                {errors && <ErrorText>{errors}</ErrorText>}

                <LoginButtonWrapper>
                    <button onClick={doLogin}>Prijavi se</button>
                </LoginButtonWrapper>

                <RegisterContainer>
                    <span>Još uvijek nemaš račun? </span>
                    <RegisterText onClick={() => navigate('/register')}>
                        Registriraj se
                    </RegisterText>
                </RegisterContainer>
            </FormContainer>
        </LoginContainer>
    );
};

export default LoginScreen;
