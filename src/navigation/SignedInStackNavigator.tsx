import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/Dashboard/Dashboard';

const SignedInStack = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Dashboard" component={Dashboard} />
      {/* WalletScreen */}
      {/* Settings */}
      {/* Profile */}
      {/* Transactions */}
    </RootStack.Navigator>
  );
};

export default SignedInStack;
