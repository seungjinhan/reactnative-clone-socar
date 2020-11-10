import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import IntroScreen from '../IntroScreen';

const Stack = createStackNavigator();

import { AuthContext } from '../../context/AuthContext';
import { Loading } from '../../components/Loading';

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="Intro"
          component={IntroScreen}
          options={{title:''}} />
      ) : (
        <RootStack.Screen
          name="Intro"
          component={IntroScreen}
          options={{title:''}} />
      )}
    </RootStack.Navigator>
  );

const Navigator = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => {

        return {
          signIn: () => {
            setIsLoading(false);
            setUserToken("1234");
          },
          signUp: () => {
            setIsLoading(false);
            setUserToken("1234");
          },
          signOut: () => {
            setIsLoading(false);
            setUserToken(null);
          }
        };
    }, []);
    
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    
    SplashScreen.hide();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <RootStackScreen userToken={userToken} />
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Navigator;