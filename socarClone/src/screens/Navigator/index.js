import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import IntroScreen from '../IntroScreen';

import { AuthContext } from '../../context/AuthContext';
import { Loading } from '../../components/Loading';
import MainScreen from '../MainScreen';

const RootStack = createStackNavigator();

// 로그인 유무에 따라서 메인으로 갈지 인트로로 갈지를 결정
const RootStackScreen = ({ userToken }) => (

  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: '' }} />
    ) : (
        <RootStack.Screen
          name="Auth"
          component={IntroScreen}
          options={{ title: '' }} />
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