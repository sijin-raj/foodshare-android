import { useEffect, useState } from 'react';
import api from '../api';
import { Doctor } from '../api/types';
import useToastMessage from '../useToastMessage';
import { getErrorMessage } from '../Utilities/getErrorMessage';

const useDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const toastMessage = useToastMessage();

  useEffect(() => {
    const getDoctorsList = async () => {
      setLoading(true);
      try {
        const result = await api.doctors.list();
        result && setDoctors(result);
        setLoading(false);
      } catch (err) {
        setError(getErrorMessage(err));
        toastMessage.error(getErrorMessage(err));
        setLoading(false);
      }
      setLoading(false);
    };
    getDoctorsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { doctors, loading, error };
};

export default useDoctors;
