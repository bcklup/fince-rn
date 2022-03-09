import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Dashboard.styles';

export const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};
