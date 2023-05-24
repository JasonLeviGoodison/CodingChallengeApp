import { Dimensions, Platform, StyleSheet } from 'react-native';
import { SPACING } from '../../common/constants';

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      surface: {
        width: '100%',
        height: 150,
        padding: SPACING,
        backgroundColor: 'lightgrey',
        borderRadius: 150 * 0.1,
        overflow: 'hidden',
      },
    },
    default: {
      pressable: {
        height: Dimensions.get('window').width / 2.5,
        width: '40%',
        padding: '2.5%',
        margin: '2.5%',
        backgroundColor: 'lightgrey',
        borderRadius: Dimensions.get('window').width * 0.05,
        overflow: 'hidden',
      },
      surface: {
        flex: 1,
        margin: '2.5%',
        borderRadius: Dimensions.get('window').width * 0.05,
      },
    },
  }),
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: Dimensions.get('window').width * 0.05,
  },
});

export default styles;
