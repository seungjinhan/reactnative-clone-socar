import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from '../IntroScreen';

const Stack = createStackNavigator();

const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Intro" headerMode="none">
                <Stack.Screen name="Intro" component={IntroScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;