import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from "./components/Card";
import Create from "./pages/createCat";
import { CatStore } from './CatStore';
import HomeScreen from './components/HomeScreen';
import DisplayCard from './components/DisplayCard';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <RootSiblingParent>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Create Cat"
          component={Create}
          options={{title: 'Cat!'}}
        />
        <Stack.Screen
          name="Display Card"
          component={DisplayCard}
          options={{title: 'Welcome!'}}
        />
    </Stack.Navigator>
    </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});
