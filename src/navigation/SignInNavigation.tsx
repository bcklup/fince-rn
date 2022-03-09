import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens/Login/LoginScreen';
import { SignUpScreen } from '../screens/SignUp/SignUpScreen';

const SignInStackNavigator = () => {
  const SignInStack = createNativeStackNavigator();

  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SignInStack.Screen name="Login" component={LoginScreen} />
      <SignInStack.Screen name="Signup" component={SignUpScreen} />
    </SignInStack.Navigator>
  );
};

export default SignInStackNavigator;
