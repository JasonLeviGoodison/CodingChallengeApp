import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';  // Correct import for Button

import store from './index';
import CatListScreen from './src/screens/CatListScreen';
import CatDetailScreen from './src/screens/CatDetailScreen';
import AddCatScreen from './src/screens/AddCatScreen';
import EditCatScreen from './src/screens/EditCatScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="CatListScreen" component={CatListScreen} />
                    <Stack.Screen
                        name="CatDetailScreen"
                        component={CatDetailScreen}
                        options={({ navigation }) => ({ // options is a function that returns an object
                            headerLeft: () => (
                                <Button
                                    title="Back"
                                    onPress={() => navigation.goBack()}  // navigation is now accessible
                                />
                            ),
                        })}
                    />
                    <Stack.Screen name="AddCatScreen" component={AddCatScreen} />
                    <Stack.Screen name="EditCatScreen" component={EditCatScreen} />
                </Stack.Navigator>

                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}
