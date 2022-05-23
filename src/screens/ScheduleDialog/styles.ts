import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
  },
  paper: {
    backgroundColor: 'white',
    height: '100%',
    flexGrow: 1,
    marginTop: 200,
    borderTopRightRadius: spacing.big2,
    borderTopLeftRadius: spacing.big2,
    paddingTop: spacing.big2,
    paddingHorizontal: spacing.medium3,
  },
  pattern: {
    position: 'absolute',
  },
  back: { position: 'absolute', top: 60, left: 25, zIndex: 1, color: 'white' },
  timesHeader: { marginTop: spacing.medium3 },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  timeButton: { marginBottom: 10, minWidth: '30%' },
  button: { marginTop: spacing.huge3 },
  subtitle: { marginTop: spacing.mini3 },
});
