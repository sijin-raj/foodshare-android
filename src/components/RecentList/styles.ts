import { StyleSheet } from 'react-native';
import spacing from '../../theme/spacing';

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    flexDirection: 'row',
  },
  avatar: {
    marginRight: spacing.small1,
  },
  extraButton: {
    paddingHorizontal: 21,
    paddingTop: 13,
  },
});
