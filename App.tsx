import WebNavigator from './src/navigation/WebNavigator';
import { Provider } from 'react-redux';
import AppLoading from './components/AppLoading';
import { store } from './src/store/store';
import { GlobalStyle, theme } from './src/styles/globalStyles'; // Import GlobalStyle
import { ThemeProvider } from 'styled-components';

export default function App()
{
    // Font loading and splash screen logic will be handled differently for web.
    // For now, we'll assume fonts are loaded and proceed directly to rendering.

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle /> {/* Inject global styles */}
                {/* GestureHandlerRootView and SafeAreaProvider are React Native specific and removed */}
                <WebNavigator />
                {/* StatusBar is React Native specific and removed */}
            </ThemeProvider>
        </Provider>
    );
}



