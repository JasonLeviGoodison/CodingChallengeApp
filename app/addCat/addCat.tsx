import { SafeAreaView, View } from 'react-native';
import { Stack } from 'expo-router';
import styles from './addCatStyle';
import AddCatForm from '../../components/addCatForm/AddCatForm';

const AddCat = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Add cat' }} />
        <AddCatForm></AddCatForm>
      </View>
    </SafeAreaView>
  );
};

export default AddCat;
