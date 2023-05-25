import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/ListScreen';
import { CatProvider } from './context/CatContext';
import CustomHeader from './components/CustomHeader';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

LogBox.ignoreLogs(['Sending `onAnimated` with no listeners registered.']);

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Pokemon: require('./assets/fonts/Pokemon-Solid.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <CatProvider>
      <View style={{ flex: 1 }}>
        <CustomHeader />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="List" component={ListScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </CatProvider>
  );
}