import { StyleSheet } from 'react-native';
import colors, { palette } from '../../theme/colors';
import spacing from '../../theme/spacing';

export const AVATAR_SIZE = 150;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingTop: spacing.big1,
    paddingBottom: spacing.medium3,
    alignItems: 'center',
  },
  divider: {
    height: 2,
    width: '80%',
    backgroundColor: colors.secondary,
    alignSelf: 'center',
  },
  language: {
    paddingTop: spacing.big1,
    paddingBottom: spacing.medium3,
    paddingHorizontal: spacing.medium2,
  },
  languageForm: {
    marginTop: spacing.small3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointments: {
    paddingTop: spacing.big1,
    paddingBottom: spacing.medium3,
    paddingHorizontal: spacing.medium2,
  },
  sessionContainer: {
    marginTop: spacing.small4,
  },
  session: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingVertical: spacing.small2,
    paddingHorizontal: spacing.medium2,
    marginBottom: spacing.small2,
    backgroundColor: palette.primary.lightest,
    borderRadius: 20,
  },
  date: {
    marginLeft: spacing.small3,
  },
});
