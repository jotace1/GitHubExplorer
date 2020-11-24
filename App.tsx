import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/hooks/auth';
import AppRoutes from './src/routes/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
