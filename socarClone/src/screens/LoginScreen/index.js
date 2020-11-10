
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AuthContext } from '../../context/AuthContext';

const AuthStack = createStackNavigator();

const LoginScreen = ( {navigation}) => {

    const { signIn} = React.useContext(AuthContext);

    return(
        <View>
            <Text>로그인화면</Text>
        </View>
    )
}

export default LoginScreen;