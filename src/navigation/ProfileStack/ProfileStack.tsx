import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from '../AppStack';

const Stack = createStackNavigator();

const ModalStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="modal" headerMode="none">
      <Stack.Screen name="Profile">
        {() => (
          <AppStack initialRouteName="Profile" initialParams={undefined} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ModalStack;
