import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignedInStack from './SignedInStackNavigator';
import SignInStackNavigator from './SignInNavigation';

type NavigationProps = {
  user?: any;
};

const Navigation: React.FC<NavigationProps> = ({ user }) => {
  return (
    <NavigationContainer>
      <RootNavigator user={user} />
    </NavigationContainer>
  );
};

const RootNavigator: React.FC<NavigationProps> = ({ user }) => {
  if (user !== null) return <SignedInStack />;
  return <SignInStackNavigator />;
};

export default Navigation;
