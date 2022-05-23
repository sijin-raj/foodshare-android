import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    marginTop: spacing.medium3,
    paddingHorizontal: spacing.medium3,
  },
  title: {
    marginBottom: spacing.small1,
  },
  text: {
    marginBottom: spacing.small1,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: { marginBottom: spacing.small1, marginRight: spacing.small1 },
});
