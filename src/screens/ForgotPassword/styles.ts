import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: colors.white,
    width: '100%',
    padding: spacing.big1,
    marginBottom: spacing.medium3,
  },
  background: {
    position: 'absolute',
  },
  title: { marginTop: spacing.mini2, marginBottom: spacing.mini3 },
  subtitle: {
    opacity: 0.7,
    marginBottom: spacing.big2,
  },
  fields: { marginHorizontal: spacing.mini2 },
  field: { marginBottom: spacing.medium3 },
  button: { marginTop: spacing.medium3 },
  back: { position: 'absolute', top: 60, left: 25, zIndex: 1, color: 'white' },
});
