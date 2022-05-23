import { isSameDay } from 'date-fns';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  ScrollView,
  StatusBar,
  Text,
  ActivityIndicator,
} from 'react-native';
import BgPattern from '../../../assets/homeBgPattern.svg';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { useAppNavigation, useAppRoute } from '../../navigation/AppStack/hooks';
import colors from '../../theme/colors';
import Appointments from './Appointments';
import ContactInfo from './ContactInfo';
import Description from './Description';
import DoctorHeader from './DoctorHeader';
import styles from './styles';
import useDoctor from './useDoctor';

const DoctorProfile = () => {
  const { navigate, goBack } = useAppNavigation();
  const { t } = useTranslation('doctorProfile');
  const { params } = useAppRoute<'DoctorProfileModal'>();
  const {
    doctor,
    loading,
    availability,
    appointments,
    setAppointment,
  } = useDoctor(params.id);

  const handlePress = (date: Date) => {
    navigate('ScheduleDialog', {
      date,
      appointments:
        appointments
          ?.filter(appointment => isSameDay(appointment.date, date))
          .map(item => item.date) || [],
      onSchedule: setAppointment,
    });
  };

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
        translucent={true}
      />

      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        <Icon
          style={styles.back}
          name="left-arrow"
          size={24}
          onPress={goBack}
        />
        <BgPattern
          style={styles.pattern}
          height="100%"
          width="100%"
          preserveAspectRatio="xMaxYMin slice"
        />
        <View style={styles.paper}>
          {loading ? (
            <ActivityIndicator
              style={styles.loading}
              size="large"
              color={colors.primary}
            />
          ) : doctor === null ? (
            <Text>Doctor not found</Text>
          ) : (
            <>
              <DoctorHeader
                title={'Dr. ' + doctor.name}
                subtitle={doctor.title} //"Heart Specialist - Surgeon"
                imagURL={doctor.avatar}
              />
              <ContactInfo
                address={doctor.address}
                phone={doctor.phone}
                email={doctor.email}
              />
              <Description
                title={t('description.title')}
                details={doctor.bio}
              />
              <Appointments
                title={t('appointments.title')}
                // onPress={handlePress}
                hours={doctor.availability}
              />
              <Button 
              style={styles.button}
              loading={loading}
              theme="primary"
              size="medium"
              onPress={() => navigate('CreateForm')}>
              donate
            </Button>
            </>
          )}
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default DoctorProfile;
