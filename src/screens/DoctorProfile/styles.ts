import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

const PATTERN_HEIGHT = 130;
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
  },
  paper: {
    backgroundColor: 'white',
    height: '100%',
    flexGrow: 1,
    marginTop: PATTERN_HEIGHT,
    borderTopRightRadius: spacing.big2,
    borderTopLeftRadius: spacing.big2,
    paddingTop: spacing.medium2,
  },
  button: { margin: 40 },
  pattern: {
    position: 'absolute',
  },
  back: { position: 'absolute', top: 60, left: 25, zIndex: 1, color: 'white' },
  loading: { marginTop: spacing.huge3 },
});
