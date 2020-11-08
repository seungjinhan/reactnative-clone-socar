import React from 'react';
import {
    StatusBar,
} from 'react-native';
import Navigator from './screens/Navigator';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Navigator />
        </>
    );
};

export default App;
