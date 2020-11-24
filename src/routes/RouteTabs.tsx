import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repositories';
import Followers from '../pages/Followers';
import Following from '../pages/Following';

const {Navigator, Screen} = createBottomTabNavigator();

function RouteTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          overflow: 'hidden',
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          marginTop: 5,
          fontSize: 15,
        },
        inactiveBackgroundColor: '#fafafc',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#000',
      }}>
      <Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon name="home" size={size} color={focused ? '#000' : color} />
            );
          },
        }}
      />
      <Screen
        name="Repos"
        component={Repositories}
        options={{
          tabBarLabel: 'Repos',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="github"
                size={size}
                color={focused ? '#000' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarLabel: 'Followers',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon name="users" size={size} color={focused ? '#000' : color} />
            );
          },
        }}
      />

      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarLabel: 'Following',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon name="users" size={size} color={focused ? '#000' : color} />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default RouteTabs;
