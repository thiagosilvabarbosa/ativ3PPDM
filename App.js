import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Icon } from 'react-native-elements';

import ExploreScreen from './screens/ExploreScreen';
import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#5D5FEF',
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" type="ionicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="compass" type="ionicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="chatbubble-ellipses" type="ionicon" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
