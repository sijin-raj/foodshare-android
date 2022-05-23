import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamsList = {
  Select:undefined;
  Delivary:undefined;
  Welcome: undefined;
  RUWelcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Schedule:undefined;
  ForgotPassword: undefined;
  App: undefined;
};

export type AppStackParams = {
  Home: undefined;
  Doctors: undefined;
  CreateForm:undefined;
  DoctorProfile: { id: string };
  ScheduleDialog: {
    date: Date;
    appointments: Array<Date>;
    onSchedule: (time: Date) => void;
  };
  Profile: undefined;
};

export type AppStackRouteName = keyof AppStackParams;

export type ModalStackParams = {
  AppStack: undefined;
  DoctorProfileModal: AppStackParams['DoctorProfile'];
  ScheduleDialogModal: AppStackParams['ScheduleDialog'];
};

export type ModalStackRouteName = keyof ModalStackParams;

export type DoctorStackParams = {
  Doctors: AppStackParams['Doctors'];
  DoctorProfileModal: AppStackParams['DoctorProfile'];
};

export type DrawerStackParams = {
  HomeDrawer: undefined;
  DoctorsDrawer: undefined;
  ProfileDrawer: undefined;
};

export type DrawerStackRouteName = keyof DrawerStackParams;

export type TotalRouteName =
  | ModalStackRouteName
  | AppStackRouteName
  | DrawerStackRouteName;

export type TotalParamList = ModalStackParams &
  AppStackParams &
  DrawerStackParams;

export type AppModalNavigationProp<
  R extends keyof TotalParamList = any
> = StackNavigationProp<TotalParamList, R>;

export type TotalNavigationProp<
  T extends TotalRouteName
> = CompositeNavigationProp<
  StackNavigationProp<TotalParamList, T>,
  AppModalNavigationProp
>;

export type AppStackRouteProp<T extends TotalRouteName> = RouteProp<
  TotalParamList,
  T
>;
