import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import styles from './CatDetailStyle';
import { CatDetailProps } from '../../common/typesAndInterfaces';

const CatDetail = ({ name, breed, age, favFoods, description, image }: CatDetailProps) => {
  return (
    <Card mode="contained" style={styles.card}>
      <View style={styles.view}>
        <Card.Cover source={{ uri: image }} style={styles.image} />
      </View>
      <Card.Content>
        <Text variant="bodyLarge">{`Name: ${name}`}</Text>
        <Text variant="bodyLarge">{`Breed: ${breed}`}</Text>
        <Text variant="bodyLarge">{`Age: ${age}`}</Text>
        <Text variant="bodyLarge">{`Favorite foods: ${favFoods}`}</Text>
        <Text variant="bodyLarge">{`Description: ${description}`}</Text>
      </Card.Content>
    </Card>
  );
};

export default CatDetail;
