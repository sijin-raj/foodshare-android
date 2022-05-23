import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.secondary,
    marginTop: spacing.small3,
  },
  textContainer: { flex: 1, padding: spacing.big1 },
  divider: {
    height: '100%',
    borderRightWidth: 1,
    borderColor: colors.secondary,
  },
});
