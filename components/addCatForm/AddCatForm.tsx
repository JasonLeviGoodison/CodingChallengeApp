import { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, TextInput, Card } from 'react-native-paper';
import styles from './AddCatFormStyles';
import ImagePicker from '../imagePicker/ImagePicker';
import CatsContext from '../../hooks/catsContext/CatsContext';
import SortContext from '../../hooks/sortContext/SortContext';
import { generateKey, compareName, compareBreed, compareAgeAsc, compareAgeDesc } from '../../utils/utils';
import { DEFAULT_IMAGE, SORT_PROPERTIES } from '../../common/constants';
import { Cat } from '../../common/typesAndInterfaces';

const AddCatForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(DEFAULT_IMAGE);
  const { cats, setCats } = useContext(CatsContext);
  const { property, setProperty } = useContext(SortContext);

  const getUpdatedCats = () => {
    let updatedCats: Array<Cat> = [];
    if (property === SORT_PROPERTIES.NAME) {
      updatedCats = [...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }].sort(
        compareName
      );
    } else if (property === SORT_PROPERTIES.BREED) {
      updatedCats = [...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }].sort(
        compareBreed
      );
    } else if (property === SORT_PROPERTIES.AGE_ASC) {
      updatedCats = [...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }].sort(
        compareAgeAsc
      );
    } else if (property === SORT_PROPERTIES.AGE_DESC) {
      updatedCats = [...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }].sort(
        compareAgeDesc
      );
    }
    return updatedCats;
  };

  return (
    <>
      <Card mode="contained" style={styles.card}>
        <ScrollView>
          <ImagePicker image={image} setImage={setImage}></ImagePicker>
          <Card.Content>
            <TextInput label="Name" value={name} onChangeText={setName} multiline></TextInput>
            <TextInput label="Breed" value={breed} onChangeText={setBreed} multiline></TextInput>
            <TextInput label="Age" keyboardType="numeric" value={age} onChangeText={setAge} multiline></TextInput>
            <TextInput label="Favorite foods" value={favFoods} onChangeText={setFavFoods} multiline></TextInput>
            <TextInput label="Description" value={description} onChangeText={setDescription} multiline></TextInput>
          </Card.Content>
        </ScrollView>
      </Card>
      <Button
        mode="contained"
        onPress={() => {
          setCats(getUpdatedCats());
          setName('');
          setBreed('');
          setAge('');
          setFavFoods('');
          setDescription('');
          setImage(DEFAULT_IMAGE);
          router.push('/home');
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default AddCatForm;
