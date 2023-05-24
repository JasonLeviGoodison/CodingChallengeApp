import { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, TextInput, Card } from 'react-native-paper';
import styles from './EditCatFormStyles';
import ImagePicker from '../imagePicker/ImagePicker';
import CatsContext from '../../hooks/catsContext/CatsContext';
import SortContext from '../../hooks/sortContext/SortContext';
import { generateKey, compareName, compareBreed, compareAgeAsc, compareAgeDesc } from '../../utils/utils';
import { SORT_PROPERTIES } from '../../common/constants';
import { Cat, CatDetailProps } from '../../common/typesAndInterfaces';

const EditCatForm = ({ id, name, breed, age, favFoods, description, image }: CatDetailProps) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newBreed, setNewBreed] = useState(breed);
  const [newAge, setNewAge] = useState(age);
  const [newFavFoods, setNewFavFoods] = useState(favFoods);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const { cats, setCats } = useContext(CatsContext);
  const { property, setProperty } = useContext(SortContext);

  const getUpdatedCats = (newId: string) => {
    const updatedCats: Array<Cat> = cats.filter((cat) => cat.id !== id);
    updatedCats.push({
      id: newId,
      name: newName,
      breed: newBreed,
      age: newAge,
      favFoods: newFavFoods,
      description: newDescription,
      image: newImage,
    });
    if (property === SORT_PROPERTIES.NAME) {
      updatedCats.sort(compareName);
    } else if (property === SORT_PROPERTIES.BREED) {
      updatedCats.sort(compareBreed);
    } else if (property === SORT_PROPERTIES.AGE_ASC) {
      updatedCats.sort(compareAgeAsc);
    } else if (property === SORT_PROPERTIES.AGE_DESC) {
      updatedCats.sort(compareAgeDesc);
    }
    return updatedCats;
  };

  return (
    <>
      <Card mode="contained" style={styles.card}>
        <ScrollView>
          <ImagePicker image={newImage} setImage={setNewImage}></ImagePicker>
          <Card.Content>
            <TextInput label="Name" value={newName} onChangeText={setNewName} multiline></TextInput>
            <TextInput label="Breed" value={newBreed} onChangeText={setNewBreed} multiline></TextInput>
            <TextInput label="Age" keyboardType="numeric" value={newAge} onChangeText={setNewAge} multiline></TextInput>
            <TextInput label="Favorite foods" value={newFavFoods} onChangeText={setNewFavFoods} multiline></TextInput>
            <TextInput
              label="Description"
              value={newDescription}
              onChangeText={setNewDescription}
              multiline
            ></TextInput>
          </Card.Content>
        </ScrollView>
      </Card>
      <Button
        mode="contained"
        onPress={() => {
          const newId = generateKey(newName);
          setCats(getUpdatedCats(newId));
          router.push(`/catDetail/${newId}`);
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default EditCatForm;
