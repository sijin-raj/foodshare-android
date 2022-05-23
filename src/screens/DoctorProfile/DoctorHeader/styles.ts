import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.medium3,
  },
  textContainer: { marginLeft: spacing.small1, flex: 1 , color:'black'},
});
