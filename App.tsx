import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/Navigator';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import AppLoading from './components/AppLoading'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/store/store';


export default function App() 
{

    const [fontsLoaded] = useFonts({
        'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
        'PlayfairDisplay-Regular': require('./assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf'),
        'PlayfairDisplay-Bold': require('./assets/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf'),
    });

    if (!fontsLoaded) 
    {
        return <AppLoading loadingText="Loading fonts, please wait..." />;
    }

    return (
        <>
            <Provider store={store}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <SafeAreaProvider>
                        <AppNavigator />
                        <StatusBar style="auto" />
                    </SafeAreaProvider>
                </GestureHandlerRootView>
            </Provider>
        </>
    );
}

