import { useState } from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper';
import CatsContext from '../hooks/catsContext/CatsContext';
import SortContext from '../hooks/sortContext/SortContext';

export default function Layout() {
  const [cats, setCats] = useState([]);
  const [property, setProperty] = useState('name');

  return (
    <PaperProvider>
      <CatsContext.Provider value={{ cats, setCats }}>
        <SortContext.Provider value={{ property, setProperty }}>
          <Tabs>
            {/* Displayed tabs */}
            <Tabs.Screen
              name="home"
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cat" size={size} color={color} />,
              }}
            />
            <Tabs.Screen
              name="addCat/addCat"
              options={{
                tabBarLabel: 'Add cat',
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" size={size} color={color} />,
              }}
            />
            {/* Hidden tabs */}
            <Tabs.Screen name="index" options={{ href: null }} />
            <Tabs.Screen name="homeStyle" options={{ href: null }} />
            <Tabs.Screen name="addCat/addCatStyle" options={{ href: null }} />
            <Tabs.Screen name="catDetail/[id]" options={{ href: null }} />
            <Tabs.Screen name="catDetail/catDetailStyle" options={{ href: null }} />
            <Tabs.Screen name="editCat/[id]" options={{ href: null }} />
            <Tabs.Screen name="editCat/editCatStyle" options={{ href: null }} />
          </Tabs>
        </SortContext.Provider>
      </CatsContext.Provider>
    </PaperProvider>
  );
}
