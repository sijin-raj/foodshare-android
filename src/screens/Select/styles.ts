import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export const DOCTOR_ILLUSTRATION_HEIGHT = 150;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  card:{
    backgroundColor: 'white',
    borderRadius:20,
    marginTop:60,
    margin:20

        
  },
  card2:{
    backgroundColor: 'white',
    borderRadius:20,
    marginTop:70,
    margin:20

        
  },
  doctorIllustration: { marginTop: 50, alignSelf: 'center' , width:150 },
  getStartedContainer: { flex: 1 },
  backgroundPattern: { position: 'absolute' },
  signUpBtn: { marginHorizontal: spacing.medium3, marginTop: 10 , marginBottom:20 },
  loginText: { marginTop: spacing.small2  },
  loginUnderline: { textDecorationLine: 'underline' },
  languageContainer: {
    marginTop: spacing.medium1,
    paddingHorizontal: spacing.huge3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
