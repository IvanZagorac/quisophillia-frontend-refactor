/* eslint-disable max-len */
import React, { useState } from 'react';
// eslint-disable-next-line max-len
import { View, Text, TextInput, Button, Alert, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { z } from 'zod';
import api from '../../api/api';
import { UserRegisterType } from '../../types/UserRegisterType';
import { saveToken } from '../../api/authUtils';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { navigate } from '../../../components/Navigation';
import { registerStyles } from './RegisterStyle';
import { Eye, EyeOff } from 'lucide-react-native';
import { globalStyles } from '../../styles/globalStyles';
import * as FileSystem from 'expo-file-system';
    

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

    const pickImage = async () => 
    {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) 
        {
            Alert.alert('Permission required', 'You need to enable permissions to pick an image.');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });

        if (!result.canceled && result.assets.length > 0) 
        {
            console.log(result.assets[0]);
            setUser({ ...user, image: result.assets[0]});
        }
    };

    const handleChange = (key: string, value: string) => 
    {
        if (key === 'type')
        {
            console.log(value);
        }
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
        // const blob = new Blob([metadata], { type: 'application/json' });
        // formData.append('name', user.name);
        // formData.append('surname', user.surname);
        // formData.append('email', user.email);
        // formData.append('password', user.password);
        // formData.append('type', user.type);
        // const fileInfo = await FileSystem.getInfoAsync(user.image.uri);
        // if (!fileInfo.exists) {r
        //     console.warn("File does not exist:", user.imageuri);
        // }
        
        if (user.image?.uri) 
        {
            const imageUri = user.image.uri;
    
            const fileInfo = await FileSystem.getInfoAsync(imageUri);
            if (!fileInfo.exists) 
            {
                console.error('File does not exist:', imageUri);
                return;
            }
    
            const imageBlob: any = {
                uri: imageUri,
                name: user.image.fileName,
                type: user.image.mimeType,
            };
    
            formData.append('image', imageBlob);
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
            Alert.alert('Error', response.data );
                        
            return;
        }
        await saveToken(response.data.data.accessToken, 'token');
        await saveToken(response.data.data.refreshToken, 'refresh');
        
        navigate('Home');
              
        setErrors({});
        Alert.alert('Success', 'Form submitted successfully!');
    };

    return (

        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View style={globalStyles.container}>
                        <Text style={registerStyles.title}>Name</Text>
                        <TextInput
                            style={registerStyles.input}
                            placeholderTextColor="#A4A6AC"
                            placeholder="Ime"
                            onChangeText={(value) => handleChange('name', value)}
                        />
                        {errors.name && <Text style={registerStyles.error}>{errors.name}</Text>}

                        <Text style={registerStyles.title}>Surname</Text>
                        <TextInput
                            style={registerStyles.input}
                            placeholderTextColor="#A4A6AC"
                            placeholder="Prezime"
                            onChangeText={(value) => handleChange('surname', value)}
                        />
                        {errors.surname && <Text style={registerStyles.error}>{errors.surname}</Text>}

                        <Text style={registerStyles.title}>Email</Text>
                        <TextInput
                            style={registerStyles.input}
                            placeholderTextColor="#A4A6AC"
                            placeholder="Email"
                            onChangeText={(value) => handleChange('email', value)}
                        />
                        {errors.email && <Text style={registerStyles.error}>{errors.email}</Text>}

                        <Text style={registerStyles.title}>Password</Text>
                        <View style={registerStyles.passwordContainer}>
                            <TextInput
                                style={registerStyles.input}
                                placeholderTextColor="#A4A6AC"
                                placeholder="Lozinka"
                                secureTextEntry={!showPassword}
                                onChangeText={(value) => handleChange('password', value)}
                            />
                            <TouchableOpacity style={registerStyles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff size={24} color="gray" /> : <Eye size={24} color="gray" />}
                            </TouchableOpacity>
                        </View>
                        {errors.password && <Text style={registerStyles.error}>{errors.password}</Text>}

                        <Text style={registerStyles.title}>Confirm Password</Text>
                        <View style={registerStyles.passwordContainer}>
                            <TextInput
                                style={registerStyles.input}
                                placeholderTextColor="#A4A6AC"
                                placeholder="Potvrdi lozinku"
                                secureTextEntry={!showConfirmPassword}
                                onChangeText={(value) => handleChange('confirmPassword', value)}
                            />
                            <TouchableOpacity style={registerStyles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <EyeOff size={24} color="gray" /> : <Eye size={24} color="gray" />}
                            </TouchableOpacity>
                        </View>
                        {errors.confirmPassword && <Text style={registerStyles.error}>{errors.confirmPassword}</Text>}

                        <Picker
                            selectedValue={user.type}
                            onValueChange={(value) => handleChange('type', value)}
                            style={registerStyles.picker}
                        >
                            <Picker.Item label="Player" value="Player" />
                            <Picker.Item label="Maker" value="Maker" />
                        </Picker>

                        <Button color='#255A8B' title="Pick an image" onPress={pickImage} />
                        {user.image && <Image source={{ uri: user.image.uri }} style={{ width: 100, height: 100 }} />}

                        <View style={registerStyles.registerContainer}>
                            <Button color='#255A8B' title="Register" onPress={doRegister} />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
};
    
export default RegisterScreen;
