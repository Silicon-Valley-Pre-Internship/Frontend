import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navigation from './navigations';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
            <Navigation />
        </ThemeProvider>
    );
};

export default App;