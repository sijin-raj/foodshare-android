import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Languages } from '../../i18n';

export type Appointment = {
  id: string;
  user: User;
  doctor: Doctor;
  startDate: Date;
  endDate: Date;
};

interface Person {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface User extends Person {
  language: Languages;
}
export interface NewUser extends Partial<User> {}

export interface Doctor extends Person {
  title: string;
  bio: string;
  specialty: Specialty[];
  address: string;
  phone: string;
  hours:string;
  availability: string;
  appointments: string,
}

export enum Specialty {
  SURGERY = 'Surgery',
  PEDIATRICS = 'Pediatrics',
  NEUROLOGY = 'Neurology',
  DERMATOLOGY = 'Dermatology',
  PSYCHIATRY = 'Psychiatry',
  UROLOGY = 'Urology',
}
