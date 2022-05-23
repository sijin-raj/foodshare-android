import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootParamsList } from '../types';
import Select from '../../screens/Select';
import Welcome from '../../screens/Welcome';
import RUWelcome from '../../screens/RUWelcome';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import DrawerStack from '../DrawerStack';
import useAuth from '../../services/useAuth';
import ForgotPassword from '../../screens/ForgotPassword';
import DeliveryMapView from '../../screens/MapTrack/TrackOrder'
import { StackRouter } from '@react-navigation/native';
const Stack = createStackNavigator<RootParamsList>();

const RootStack = () => {
  const { currentUser } = useAuth();
  const loggedIn = currentUser !== null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!loggedIn ? (
        <Fragment>
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="Delivary" component={DeliveryMapView} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="RUWelcome" component={RUWelcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Fragment>
      ) : (
        <Stack.Screen name="App" component={DrawerStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
