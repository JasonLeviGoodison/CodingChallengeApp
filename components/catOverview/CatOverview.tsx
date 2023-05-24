import { Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Surface } from 'react-native-paper';
import styles from './CatOverviewStyle';

const CatOverview = ({ id, name, breed, age, image }) => {
  return (
    <Link href={`./catDetail/${id}`} asChild>
      <Pressable style={styles.pressable}>
        <Surface style={styles.surface} elevation={0}>
          <Text style={{ fontStyle: 'normal', fontSize: 15 }}>{name}</Text>
          <Text style={{ fontStyle: 'italic', fontSize: 10 }}>{breed}</Text>
          <Text style={{ fontStyle: 'italic', fontSize: 10 }}>{age}</Text>
          <Image source={{ uri: image }} style={styles.image} accessibilityIgnoresInvertColors />
        </Surface>
      </Pressable>
    </Link>
  );
};

export default CatOverview;
