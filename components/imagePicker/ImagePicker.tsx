import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import styles from './ImagePickerStyles';

export default function ImagePickerExample({ image, setImage }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.view}>
      <Button mode="contained" onPress={pickImage} style={styles.button}>
        Pick an image from camera roll
      </Button>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}
