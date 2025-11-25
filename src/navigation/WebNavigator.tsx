import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CreateQuizScreen from '../screens/CreateQuizScreen/CreateQuizScreen';
// import { RootStackParamList } from '../types/RootStackParamList'; // May not be directly applicable for react-router-dom

const WebNavigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} /> {/* Set Login as the default route */}
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/create-quiz" element={<CreateQuizScreen />} />
                {/* Add a catch-all route for 404 or redirect if needed */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default WebNavigator;
