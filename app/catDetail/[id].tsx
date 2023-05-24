import { useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from 'react-native-paper';
import styles from './catDetailStyle';
import CatDetail from '../../components/catDetail/CatDetail';
import CatsContext from '../../hooks/catsContext/CatsContext';

const catDetail = () => {
  const router = useRouter();
  const { cats, setCats } = useContext(CatsContext);
  const { id } = useLocalSearchParams();

  const cat = cats.filter((cat) => {
    return cat.id === id;
  })[0];
  return cat ? (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: cat.name }} />
      <ScrollView style={styles.scrollView}>
        <CatDetail {...cat}></CatDetail>
      </ScrollView>
      <Button
        mode="contained"
        onPress={() => {
          router.push(`../editCat/${id}`);
        }}
        style={styles.button}
      >
        Edit cat
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          router.push('/home');
          setCats(cats.filter((cat) => cat.id !== id));
        }}
        style={styles.button}
      >
        Remove cat
      </Button>
    </SafeAreaView>
  ) : null;
};

export default catDetail;
