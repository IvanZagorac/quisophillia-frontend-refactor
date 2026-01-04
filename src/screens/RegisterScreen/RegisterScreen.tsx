/* eslint-disable max-len */
import React, { useState } from 'react';
import { z } from 'zod';
import api from '../../api/api';
import { UserRegisterType } from '../../types/UserRegisterType';
import { saveToken } from '../../api/authUtils';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const registerSchema = z.object({
    name: z.string().min(2, 'Ime mora imati najmanje 2 slova'),
    surname: z.string().min(2, 'Prezime mora imati najmanje 2 slova'),
    email: z.string().email('Neispravan email'),
    password: z.string().min(6, 'Lozinka mora imati najmanje 6 znakova'),
    confirmPassword: z.string().min(6, 'Potvrda lozinke je obavezna'),
    address: z.string().optional(),
}).refine((data: any) => data.password === data.confirmPassword, {
    message: 'Lozinke se ne podudaraju',
    path: ['confirmPassword'],
});

const RegisterScreen = () => 
{
    const navigate = useNavigate();

    const [user, setUser] = useState<UserRegisterType>({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: null,
        teamId: undefined,
        type: 'Player',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const pickImage = (event: React.ChangeEvent<HTMLInputElement>) => 
    {
        if (event.target.files && event.target.files[0]) 
        {
            const file = event.target.files[0];
            setUser({ ...user, image: file as any });
        }
    };

    const handleChange = (key: string, value: string) => 
    {
        setUser({ ...user, [key]: value });
    };

    const doRegister = async () => 
    {
        const validation = registerSchema.safeParse(user);

        if (!validation.success) 
        {
            const formattedErrors: Record<string, string> = {};
            validation.error.errors.forEach((err: any) => 
            {
                if (err.path.length > 0) 
                {
                    formattedErrors[err.path[0]] = err.message;
                }
            });
            setErrors(formattedErrors);
            return;
        }
        const formData = new FormData();
        const data = { name: user.name, surname: user.surname, email: user.email, password: user.password, type: user.type };
        formData.append('data', JSON.stringify(data));

        if (user.image) 
        {
            formData.append('image', user.image);
        }

        const response = await api('auth/register', 'POST', formData, true);
        if (response.status === 'error') 
        {
            alert('Error: ' + response.data);
            return;
        }
        await saveToken(response.data.accessToken, 'token');
        await saveToken(response.data.refreshToken, 'refresh');

        navigate('/home');

        setErrors({});
        alert('Success: Form submitted successfully!');
    };

    return (
        <div className="flex flex-col justify-center items-center p-5 min-h-screen bg-background">
            <div className="flex justify-center items-center mb-10 tablet:mb-16">
                <img
                    src="/assets/images/quizophilia-high-resolution-logo-white-transparent.png"
                    alt="Quizophilia Logo"
                    className="w-48 h-auto mobile:w-64"
                />
            </div>
            <div className="w-full max-w-sm tablet:max-w-md">
                <p className="text-white text-lg mb-2.5">Name</p>
                <input
                    placeholder="Ime"
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="border-b border-[#207179] text-white pb-2.5 mb-5 bg-transparent w-full outline-none placeholder-light-text"
                />
                {errors.name && <p className="text-red-500 text-xs mb-2.5">{errors.name}</p>}

                <p className="text-white text-lg mb-2.5">Surname</p>
                <input
                    placeholder="Prezime"
                    onChange={(e) => handleChange('surname', e.target.value)}
                    className="border-b border-[#207179] text-white pb-2.5 mb-5 bg-transparent w-full outline-none placeholder-light-text"
                />
                {errors.surname && <p className="text-red-500 text-xs mb-2.5">{errors.surname}</p>}

                <p className="text-white text-lg mb-2.5">Email</p>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="border-b border-[#207179] text-white pb-2.5 mb-5 bg-transparent w-full outline-none placeholder-light-text"
                />
                {errors.email && <p className="text-red-500 text-xs mb-2.5">{errors.email}</p>}

                <p className="text-white text-lg mb-2.5">Password</p>
                <div className="relative flex items-center mb-5">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Lozinka"
                        onChange={(e) => handleChange('password', e.target.value)}
                        className="border-b border-[#207179] text-white pb-2.5 bg-transparent w-full outline-none placeholder-light-text"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 bg-transparent border-none cursor-pointer p-0 flex items-center justify-center">
                        {showPassword ? <EyeOff size={24} color="gray" /> : <Eye size={24} color="gray" />}
                    </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mb-2.5">{errors.password}</p>}

                <p className="text-white text-lg mb-2.5">Confirm Password</p>
                <div className="relative flex items-center mb-5">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Potvrdi lozinku"
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        className="border-b border-[#207179] text-white pb-2.5 bg-transparent w-full outline-none placeholder-light-text"
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2.5 bg-transparent border-none cursor-pointer p-0 flex items-center justify-center">
                        {showConfirmPassword ? <EyeOff size={24} color="gray" /> : <Eye size={24} color="gray" />}
                    </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mb-2.5">{errors.confirmPassword}</p>}

                <select
                    value={user.type}
                    onChange={(e) => handleChange('type', e.target.value)}
                    className="h-12 w-full text-white bg-transparent border border-[#207179] rounded-md mb-5 px-2.5"
                >
                    <option value="Player" className="bg-background text-white">Player</option>
                    <option value="Maker" className="bg-background text-white">Maker</option>
                </select>

                <input type="file" onChange={pickImage} className="text-white" />
                {user.image && <img src={URL.createObjectURL(user.image as File)} alt="Preview" className="w-24 h-24 mt-4" />}

                <div className="mt-10">
                    <button onClick={doRegister} className="bg-button text-white py-2.5 px-4 rounded-md cursor-pointer text-base w-full hover:bg-opacity-80 transition">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;
