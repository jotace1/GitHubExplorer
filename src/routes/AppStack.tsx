import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repositories';
import Following from '../pages/Following';
import Followers from '../pages/Followers';
import RouteTabs from './RouteTabs';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#312e38',
      },
    }}>
    <App.Screen name="SignIn" component={SignIn} />

    <App.Screen name="Tabs" component={RouteTabs} />
  </App.Navigator>
);

export default AppRoutes;
