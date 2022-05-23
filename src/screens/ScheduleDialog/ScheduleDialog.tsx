import { useNavigation } from '@react-navigation/native';
import { addMinutes, set, Duration, isSameHour, isEqual } from 'date-fns';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView, StatusBar } from 'react-native';
import BgPattern from '../../../assets/homeBgPattern.svg';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Text from '../../components/Text';
import { useAppRoute } from '../../navigation/AppStack';
import colors from '../../theme/colors';
import styles from './styles';

const START_OF_SHIFT = { hours: 10, minutes: 0 };
const APPOINTMENT_COUNT = 9;
const DURATION = 60;

const getTimes = (
  day: Date,
  startOfShift: Duration,
  dailyAppointmentCount: number,
  duration: number,
): Date[] => {
  const startTime = set(day, startOfShift);
  const times: Array<Date> = [];
  for (let index = 0; index < dailyAppointmentCount; index++) {
    times.push(addMinutes(startTime, index * duration));
  }
  return times;
};

const ScheduleDialog = () => {
  const { goBack } = useNavigation();
  const { params } = useAppRoute<'ScheduleDialog'>();
  const { date, appointments, onSchedule } = params;

  const { t } = useTranslation('scheduleDialog');
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const timeList = getTimes(date, START_OF_SHIFT, APPOINTMENT_COUNT, DURATION);
  const handleSchedule = () => {
    if (selectedTime) {
      onSchedule(selectedTime);
      goBack();
    }
  };

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
        translucent={true}
      />

      <ScrollView contentContainerStyle={styles.container} bounces={false}>
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
          <View>
            <Text size="head-24" level="600" color="black">
              {t('description.title')}
            </Text>
            <Text size="body-16" color="dark" style={styles.subtitle}>
              {t('description.subtitle', { name: 'Afreen Khan' })}
            </Text>
          </View>
          <View style={styles.timesHeader}>
            <Text size="head-20" color="black">
              {t('appointments.title')}
            </Text>
            <Text size="body-16" color="dark" style={styles.subtitle}>
              {t('appointments.subtitle')}
            </Text>
          </View>
          <View style={styles.timesContainer}>
            {timeList.map((time, index) => {
              const isSelected = selectedTime && isEqual(selectedTime, time);
              const isTaken = appointments.find(item => isSameHour(item, time));

              return (
                <Button
                  style={styles.timeButton}
                  key={index}
                  highlight={false}
                  theme={isTaken ? 'grey' : isSelected ? 'primary' : 'tertiary'}
                  onPress={() =>
                    !isTaken ? setSelectedTime(time) : undefined
                  }>
                  {t('timeFormat', { time })}
                </Button>
              );
            })}
          </View>
          <Button style={styles.button} size="big" onPress={handleSchedule}>
            {t('button.text')}
          </Button>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ScheduleDialog;
