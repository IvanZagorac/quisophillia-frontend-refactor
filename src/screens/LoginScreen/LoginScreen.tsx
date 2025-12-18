/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                { email, password }
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
        <div className="flex flex-col justify-center items-center p-5 min-h-screen bg-background">
            <div className="flex justify-center items-center mb-10">
                <img
                    src="/assets/images/quizophilia-high-resolution-logo-white-transparent.png"
                    alt="Quizophilia Logo"
                    className="w-48 h-auto mobile:w-64" // Responsive width
                />
            </div>

            <div className="w-full max-w-sm tablet:max-w-md">
                <p className="text-white text-lg mb-2.5">Email</p>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="border-b border-[#207179] text-white pb-2.5 mb-5 bg-transparent w-full outline-none placeholder-light-text"
                />

                <p className="text-white text-lg mb-2.5">Password</p>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="border-b border-[#207179] text-white pb-2.5 mb-5 bg-transparent w-full outline-none placeholder-light-text"
                />

                {errors && <p className="text-red-500 text-xs mb-2.5">{errors}</p>}

                <div className="mt-10">
                    <button onClick={doLogin} className="bg-button text-white py-2.5 px-4 rounded-md cursor-pointer text-base w-full hover:bg-opacity-80 transition">
                        Prijavi se
                    </button>
                </div>

                <div className="mt-10 flex flex-row justify-center items-center">
                    <span className="text-white">Još uvijek nemaš račun? </span>
                    <span onClick={() => navigate('/register')} className="ml-2.5 text-[#06D3F6] cursor-pointer hover:underline">
                        Registriraj se
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
