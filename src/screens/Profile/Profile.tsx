import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import Avatar from '../../components/Avatar';
import Text from '../../components/Text';
import i18n, { Languages } from '../../i18n';
import colors from '../../theme/colors';
import styles, { AVATAR_SIZE } from './styles';

const appointmentList = [
  { name: '',  },
  { name: '', },
];
const userInfo = {
  name: 'Sijin',
  location: 'Tamil Nadu, India',
  image:
    'https://firebasestorage.googleapis.com/v0/b/foodshare-af2a6.appspot.com/o/profile%2Fperson.png?alt=media&token=28f28adb-dd30-4fce-9762-48f03750e914',
};

const Profile: FC = () => {
  const { t } = useTranslation('profile');
  const [loading, setLoading] = useState(true);
  const changeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer} bounces={false}>
      <View style={styles.container}>
        <Avatar shape="circular" size={AVATAR_SIZE}  >
          <Image
            source={{
              uri: userInfo.image,
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
            }}
            onLoad={() => setLoading(false)}
          />
          {loading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              color="white"
              size="large"
            />
          )}
        </Avatar>
        <Text size="head-30" color="black">
          {userInfo.name}
        </Text>
        <Text size="body-20" color="dark">
          {userInfo.location}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.language}>
        <Text size="head-24" color="black" level="600">
          {t('language')}
        </Text>
        <View style={styles.languageForm}>
          <Switch
            trackColor={{
              true: colors.primary,
              false: colors.secondary,
            }}
            ios_backgroundColor={colors.secondary}
            onValueChange={val =>
              val ? changeLanguage('tr') : changeLanguage('en')
            }
            value={i18n.language === 'tr'}
          />
          <Text color="black" size="body-16" level="600">
            {i18n.language === 'tr'
              ? 'தமிழ் -> English'
              : 'English -> தமிழ்'}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.appointments}>
        <Text size="head-24" color="black" level="600">
          {t('upcomingAppointments')}
        </Text>
        <Text size="body-14" color="dark">
          {t('appointment', )}
        </Text>
        <View style={styles.sessionContainer}>
          {appointmentList.map(({ name }) => (
            <View style={styles.session}>
              <Text size="body-20" color="primary" level="600">
                {name}
              </Text>
            
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
