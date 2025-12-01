/* eslint-disable max-len */
import React, { useState } from 'react';
import { z } from 'zod';
import api from '../../api/api';
import { UserRegisterType } from '../../types/UserRegisterType';
import { saveToken } from '../../api/authUtils';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { FormContainer, LogoWrapper, RegisterContainer, Title, Input, ErrorText, RegisterButtonWrapper, RegisterPromptContainer, RegisterLinkText, EyeButton, StyledSelect, PasswordInputWrapper } from './RegisterStyle';


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

    const pickImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setUser({ ...user, image: file as any }); // Cast as any for now, will refine UserRegisterType
        }
    };

    const handleChange = (key: string, value: string) =>
    {
        setUser({ ...user, [key]: value });
    };

    const doRegister = async() =>
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
        const data = { name: user.name, surname: user.surname,  email: user.email, password: user.password,  type: user.type }
        formData.append('data', JSON.stringify(data));

        if (user.image)
        {
            formData.append('image', user.image); // Append the File object directly
        }

        const response = await api(
            'auth/register',
            'POST',
            formData,
            true

        );
        console.log(response);
        if (response.status === 'error')
        {
            alert('Error: ' + response.data );
            return;
        }
        await saveToken(response.data.data.accessToken, 'token');
        await saveToken(response.data.data.refreshToken, 'refresh');

        navigate('/home');

        setErrors({});
        alert('Success: Form submitted successfully!');
    };

    return (
        <RegisterContainer>
            <LogoWrapper>
                <img
                    src="/assets/images/quizophilia-high-resolution-logo-white-transparent.png"
                    alt="Quizophilia Logo"
                    style={{ width: 250, height: 157 }}
                />
            </LogoWrapper>
            <FormContainer>
                <Title>Name</Title>
                <Input
                    placeholder="Ime"
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}

                <Title>Surname</Title>
                <Input
                    placeholder="Prezime"
                    onChange={(e) => handleChange('surname', e.target.value)}
                />
                {errors.surname && <ErrorText>{errors.surname}</ErrorText>}

                <Title>Email</Title>
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}

                <Title>Password</Title>
                <PasswordInputWrapper>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Lozinka"
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    <EyeButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={24} color="gray" /> : <Eye size={24} color="gray" />}
                    </EyeButton>
                </PasswordInputWrapper>
                {errors.password && <ErrorText>{errors.password}</ErrorText>}

                <Title>Confirm Password</Title>
                <PasswordInputWrapper>
                    <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Potvrdi lozinku"
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    />
                    <EyeButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <EyeOff size={24} color="gray" /> : <Eye size={24} color="gray" />}
                    </EyeButton>
                </PasswordInputWrapper>
                {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}

                <StyledSelect
                    value={user.type}
                    onChange={(e) => handleChange('type', e.target.value)}
                >
                    <option value="Player">Player</option>
                    <option value="Maker">Maker</option>
                </StyledSelect>

                <input type="file" onChange={pickImage} />
                {user.image && <img src={URL.createObjectURL(user.image as File)} alt="Preview" style={{ width: 100, height: 100 }} />}

                <RegisterButtonWrapper>
                    <button onClick={doRegister}>Register</button>
                </RegisterButtonWrapper>
            </FormContainer>
        </RegisterContainer>
    );
};

export default RegisterScreen;
