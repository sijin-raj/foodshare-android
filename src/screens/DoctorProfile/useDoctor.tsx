import { addWeeks, getDay } from 'date-fns';
import { eachDayOfInterval } from 'date-fns/esm';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';
import { Doctor } from '../../services/api/types';
import useAuth from '../../services/useAuth';
import useToastMessage from '../../services/useToastMessage';

type Appointment = { userId: String; date: Date };

const useDoctor = (id: string) => {
  const { t } = useTranslation('scheduleDialog');
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [availability, setAvailability] = useState<Array<Date> | null>(null);
  const [appointments, setAppointments] = useState<Array<Appointment> | null>(
    null,
  );
  const toastMessage = useToastMessage();
  const { currentUser } = useAuth();

  const getDoctor = async () => {
    setLoading(true);
    try {
      const result = await api.doctors.get(id);
      if (result) {
        // setAvailability(availableDays(result.availability));
        setDoctor(result);
      }
      setLoading(false);
    } catch (error) {
      toastMessage.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDoctor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const availableDays = (days: number[]): Array<Date> => {
    const today = new Date();
    const week = addWeeks(today, 1);
    const weekDays = eachDayOfInterval({ start: today, end: week });
    return weekDays.filter(day => days.includes(getDay(day)));
  };

  const setAppointment = async (date: Date) => {
    try {
      if (currentUser) {
        setLoading(true);
        await api.doctors.setAppointment(id, currentUser?.uid, date);
        await getDoctor();
        setLoading(false);
        toastMessage.success(t('message.success'));
      }
    } catch (error) {
      toastMessage.error(error);
      setLoading(false);
    }
  };

  return { loading, doctor, availability, appointments, setAppointment };
};

export default useDoctor;
