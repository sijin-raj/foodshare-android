import Snackbar from 'react-native-snackbar';
import colors from '../../theme/colors';

const useToastMessage = () => {
  const success = (text: string) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: colors.cheer,
      textColor: colors.white,
    });
  };

  const error = (text: string) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: colors.danger,
      textColor: colors.white,
    });
  };

  const dismiss = Snackbar.dismiss;

  return { success, error, dismiss };
};

export default useToastMessage;
