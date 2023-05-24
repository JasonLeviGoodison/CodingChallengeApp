import { StyleSheet } from 'react-native';
import { SPACING } from '../../common/constants';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  card: {
    flex: 1,
    marginBottom: SPACING,
  },
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default styles;
