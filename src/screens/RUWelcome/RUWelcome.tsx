import React, { FC } from 'react';
import { Switch, View , Image} from 'react-native';
import styles, { DOCTOR_ILLUSTRATION_HEIGHT } from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import i18n, { Languages } from '../../i18n';

const RUWelcome: FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation('welcome');

  const changeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <Image 
      source={require('../../../assets/Kids.png')}
        style={styles.doctorIllustration}
        height={DOCTOR_ILLUSTRATION_HEIGHT}
      />
      <View style={styles.getStartedContainer}>
        {/* <HomeBgPattern
          style={styles.backgroundPattern}
          height={'100%'}
          width={'100%'}
          preserveAspectRatio="xMinYMin slice"
        /> */}
        <Button
          style={styles.signUpBtn}
          theme="secondary"
          size="big"
          onPress={() => navigate('SignUp')}>
          {t('getStarted')}
        </Button>

        <Text
          style={styles.loginText}
          size="body-16"
          level="600"
          align="center"
          color="black">
          {t('haveAccount') + ' '}
          <Text
            style={styles.loginUnderline}
            size="body-16"
            level="600"
            color="black"
            onPress={() => navigate('SignIn')}>
            {t('login')}
          </Text>
        </Text>
        <View style={styles.languageContainer}>
          <Text color="black" size="body-16" level="600">
            English
          </Text>
          <Switch
            onValueChange={val =>
              val ? changeLanguage('tr') : changeLanguage('en')
            }
            value={i18n.language === 'tr'}
          />
          <Text color="black" size="body-16" level="600">
          தமிழ்
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RUWelcome;
