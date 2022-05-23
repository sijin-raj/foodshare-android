import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from '../AppStack';
import { DoctorStackParams } from '../types';

const Stack = createStackNavigator<DoctorStackParams>();

const ModalStack = () => {
  return (
    <Stack.Navigator initialRouteName="Doctors" mode="modal" headerMode="none">
      <Stack.Screen name="Doctors">
        {({ route }) => (
          <AppStack initialRouteName="Doctors" initialParams={route.params} />
        )}
      </Stack.Screen>
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
