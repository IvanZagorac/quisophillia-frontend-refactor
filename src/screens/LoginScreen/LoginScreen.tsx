import React, { useState } from 'react';
// eslint-disable-next-line max-len
import { View, Text, TextInput, Button, Image, Alert, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { loginStyles } from './LoginStyle';
import { globalStyles } from '../../styles/globalStyles';
import api from '../../api/api';
import { saveToken } from '../../api/authUtils';
import { navigate } from '../../../components/Navigation';

const LoginScreen = () =>
{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<string>('');
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
                setErrors(response.data)
                
                return;
            }
            await saveToken(response.data.data.accessToken, 'token');
            await saveToken(response.data.data.refreshToken, 'refresh');
            navigate('Home')

            setErrors('');
      
            Alert.alert('Login Successful!', 'You are now logged in.');
        }
        catch (e) 
        {
            console.log(e);
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View style={globalStyles.container}>
                        <View style={loginStyles.logoWrapper}>
                            <Image
                                source={require('../../../assets/images/quizophilia-high-resolution-logo-white-transparent.png')}
                                style={{ width: 250, height: 157 }}
                            />
                        </View>

                        <View style={{ marginBottom: 60 }}>
                            <Text style={loginStyles.title}>Email</Text>
                            <TextInput
                                style={loginStyles.input}
                                placeholder="Email"
                                placeholderTextColor="#A4A6AC"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />

                            <Text style={loginStyles.title}>Password</Text>
                            <TextInput
                                style={loginStyles.input}
                                placeholder="Password"
                                placeholderTextColor="#A4A6AC"
                                secureTextEntry
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />

                            {errors && <Text style={loginStyles.error}>{errors}</Text>}
            
                            <View style={loginStyles.loginBtn}>
                                <Button color="#255A8B" onPress={doLogin} title="Prijavi se" />
                            </View>

                            

                            <View style={loginStyles.registerContainer}>
                                <Text style={globalStyles.lightText}>Još uvijek nemaš račun? </Text>
                                <Text style={loginStyles.registerText} onPress={() => navigate('Register')}>
                                Registriraj se
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
