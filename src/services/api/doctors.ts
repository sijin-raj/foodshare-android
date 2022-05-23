import { Doctor } from './types';

import firestore from '@react-native-firebase/firestore';

const doctorsCollection = firestore().collection<Doctor>('orphanage');

const get = async (id: string): Promise<Doctor | undefined> => {
  const result = await doctorsCollection.doc(id).get();
  return result.data();
};

const list = async (): Promise<Doctor[] | undefined> => {
  const result = await doctorsCollection.get();
  return result.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

const setAppointment = async (
  doctorId: string,
  userId: string,
  date: Date,
): Promise<void> => {
  return await doctorsCollection.doc(doctorId).update({
    appointments: firestore.FieldValue.arrayUnion({
      userId,
      date: firestore.Timestamp.fromDate(date),
    }),
  });
};

export default { get, list, setAppointment };
