import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export const DOCTOR_ILLUSTRATION_HEIGHT = 300;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  doctorIllustration: { marginTop: spacing.huge1, alignSelf: 'center' , width:300 },
  getStartedContainer: { flex: 1 },
  backgroundPattern: { position: 'absolute' },
  signUpBtn: { marginHorizontal: spacing.medium3, marginTop: spacing.big3 , },
  loginText: { marginTop: spacing.small4  },
  loginUnderline: { textDecorationLine: 'underline' },
  languageContainer: {
    marginTop: spacing.medium1,
    paddingHorizontal: spacing.huge3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
