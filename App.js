import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './index';
import CatListScreen from './src/screens/CatListScreen';
import CatDetailScreen from './src/screens/CatDetailScreen';
import AddCatScreen from './src/screens/AddCatScreen';

const Stack = createStackNavigator();

export default function App() { // this is the main app component
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={CatListScreen} />
          <Stack.Screen name="Details" component={CatDetailScreen} />
          <Stack.Screen name="AddCat" component={AddCatScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
