import { StyleSheet } from 'react-native';
import { SPACING } from '../../common/constants';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginTop: SPACING,
    marginBottom: SPACING,
  },
  card: {
    margin: SPACING,
  },
  text: {
    marginBottom: 0.05,
  },
});

export default styles;
