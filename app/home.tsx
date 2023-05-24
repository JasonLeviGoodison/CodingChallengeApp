import { useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';
import { Text, SegmentedButtons } from 'react-native-paper';
import styles from './homeStyle';
import CatsContext from '../hooks/catsContext/CatsContext';
import SortContext from '../hooks/sortContext/SortContext';
import CatOverview from '../components/catOverview/CatOverview';
import { compareName, compareBreed, compareAgeAsc, compareAgeDesc } from '../utils/utils';

const Home = () => {
  const { cats, setCats } = useContext(CatsContext);
  const { property, setProperty } = useContext(SortContext);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen options={{ title: 'Cats' }} />
      <ScrollView>
        <SegmentedButtons
          value={property}
          onValueChange={setProperty}
          buttons={[
            {
              value: 'name',
              label: 'Name',
              onPress(event) {
                setCats([...cats].sort(compareName));
              },
            },
            {
              value: 'breed',
              label: 'Breed',
              onPress(event) {
                setCats([...cats].sort(compareBreed));
              },
            },
            {
              value: 'age asc',
              label: 'Age \u2191',
              onPress(event) {
                setCats([...cats].sort(compareAgeAsc));
              },
            },
            {
              value: 'age desc',
              label: 'Age \u2193',
              onPress(event) {
                setCats([...cats].sort(compareAgeDesc));
              },
            },
          ]}
          style={styles.segmentedButtons}
        ></SegmentedButtons>
        {cats.length !== 0 ? (
          <View style={styles.grid}>
            {cats.map((cat) => (
              <CatOverview key={cat.id} {...cat}></CatOverview>
            ))}
          </View>
        ) : (
          <View style={styles.grid}>
            <Text variant="labelLarge" style={{ color: 'white' }}>
              Add your cats to see them here!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
