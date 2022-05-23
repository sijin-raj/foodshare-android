import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const App: () => ReactNode = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1E8449"
          translucent={true}
        />
        <I18nextProvider i18n={i18n}>
          <RootStack />
        </I18nextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
