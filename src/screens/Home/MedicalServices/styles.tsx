import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: spacing.small1,
    marginRight: spacing.small4,
  },
  submitButton: {
    marginVertical: spacing.small1,
  },
});
