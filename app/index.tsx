import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Redirect } from 'expo-router';
import { expo } from '../app.json';

export default function Index() {
  return (
    <PaperProvider>
      <Redirect href="/home" />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Index);
