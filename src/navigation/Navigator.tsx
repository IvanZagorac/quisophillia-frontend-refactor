import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import { globalStyles } from '../styles/globalStyles';
import { navigationRef } from '../../components/Navigation';
import QuizList from '../screens/HomeScreen/HomeScreen';
import CreateQuizScreen from '../screens/CreateQuizScreen/CreateQuizScreen';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => 
{
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator 
                screenOptions={{ headerStyle: globalStyles.backgroundColor, headerTintColor: 'white', }} 
                initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={QuizList}  options={{ headerShown: false }} />
                <Stack.Screen name="CreateQuiz" component={CreateQuizScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
