import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { TotalNavigationProp, TotalRouteName, TotalParamList } from '../types';

export const useAppNavigation = <R extends TotalRouteName>() =>
  useNavigation<TotalNavigationProp<R>>();

export const useAppRoute = <R extends TotalRouteName>() => {
  return useRoute<RouteProp<TotalParamList, R>>();
};
