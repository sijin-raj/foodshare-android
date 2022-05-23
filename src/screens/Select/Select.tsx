import React, { FC } from 'react';
import { Switch, View , Image} from 'react-native';
import styles, { DOCTOR_ILLUSTRATION_HEIGHT } from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import i18n, { Languages } from '../../i18n';

const Select: FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation('welcome');

  const changeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image 
      source={require('../../../assets/donating.png')}
        style={styles.doctorIllustration}
        height={DOCTOR_ILLUSTRATION_HEIGHT}
      />
      {/* <View style={styles.getStartedContainer}> */}
        <Button
          style={styles.signUpBtn}
          theme="primary"
          size="medium"
          onPress={() => navigate('Welcome')}>
           Donate
        </Button>      
      {/* </View> */}
      </View>
      <View style={styles.card}>
      <Image 
      source={require('../../../assets/Kids.png')}
        style={styles.doctorIllustration}
        height={DOCTOR_ILLUSTRATION_HEIGHT}
      />
      {/* <View style={styles.getStartedContainer}> */}
        <Button
          style={styles.signUpBtn}
          theme="primary"
          size="medium"
          onPress={() => navigate('RUWelcome')}>
           Reciving
        </Button>      
      {/* </View> */}
      </View>
    </View>
  );
};

export default Select;
