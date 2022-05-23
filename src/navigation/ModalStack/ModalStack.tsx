import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from '../AppStack';
import { ModalStackParams } from '../types';

const Stack = createStackNavigator<ModalStackParams>();

const ModalStack = () => {
  return (
    <Stack.Navigator initialRouteName="AppStack" mode="modal" headerMode="none">
      <Stack.Screen name="AppStack" component={AppStack} />
      <Stack.Screen name="DoctorProfileModal">
        {({ route }) => (
          <AppStack
            initialRouteName="DoctorProfile"
            initialParams={route.params}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ModalStack;
