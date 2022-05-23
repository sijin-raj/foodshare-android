import React, { FC, Fragment, useState } from 'react';
import { StatusBar, View } from 'react-native';
import Text from '../../components/Text';
import SearchField from '../../components/SearchField';
import HomeCard from '../../components/Card';
import CardDoctor from '../../../assets/CardDoctor.svg';
import RecentDoctors from '../../components/RecentList';
import MedicalServices from './MedicalServices';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Trans, useTranslation } from 'react-i18next';
import useDoctors from '../../services/useDoctors';
import { useAppNavigation } from '../../navigation/AppStack';

const Home: FC = () => {
  const { t } = useTranslation('home');
  // const { navigate } = useNavigation();
  const { navigate } = useAppNavigation();
  const [term, setTerm] = useState<string>('');
  const [showCard, setShowCard] = useState<boolean>(true);

  const { doctors, loading, error } = useDoctors();
  const findDoctors = () => {
    navigate('DoctorsDrawer');
  };
  /** Todo
   * const findDoctors = (services: Array<string>) => {
   * navigate('DoctorsDrawer', { services });
   * };
   */

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <View style={styles.title}>
          <Text color="black" size="head-30">
            <Trans
              i18nKey="home:header"
              values={{ name: 'Initha' }}
              components={{
                b: <Text color="black" size="head-30" level="500" />,
              }}
            />
          </Text>
        </View>
        <View style={styles.search}>
          <SearchField
            placeholder={t('search.placeholder')}
            value={term}
            onChangeText={setTerm}
            handleClear={() => setTerm('')}
          />
        </View>
        <View style={styles.card}>
          {showCard && (
            <HomeCard
              onClose={() => setShowCard(true)}
              title={t('card.title')}
              subtitle={t('card.subtitle')}
              rightNode={<CardDoctor style={styles.doctorIcon} />}
            />
          )}
        </View>
        <View style={styles.recent}>
          {!error && (
            <>
              <Text color="black" size="head-24" level="600">
                {t('doctors.title')}
              </Text>
              <Text color="dark" size="body-14">
                {t('doctors.subtitle', { count: 12 })}
              </Text>
              <RecentDoctors
                style={styles.innerContainer}
                doctors={doctors}
                loading={loading}
                onPress={id => {
                  navigate('DoctorProfileModal', { id });
                }}
                onExtraPress={findDoctors}
              />
            </>
          )}
        </View>
        <View>
          <Text color="black" size="head-24" level="600">
            {t('services.title')}
          </Text>
          <Text color="dark" size="body-14">
            {t('services.subtitle')}
          </Text>
          <MedicalServices
            style={styles.innerContainer}
            onPress={findDoctors}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Home;
