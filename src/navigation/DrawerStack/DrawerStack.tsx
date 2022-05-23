import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModalStack from '../ModalStack';
import DoctorsStack from '../DoctorsStack';
import DrawerMenu from './DrawerMenu';
import { DrawerStackParams } from '../types';
import { useTranslation } from 'react-i18next';
import ProfileStack from '../ProfileStack';

const Drawer = createDrawerNavigator<DrawerStackParams>();

const MyDrawer = () => {
  const { t } = useTranslation('common');

  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name="HomeDrawer"
        component={ModalStack}
        options={{ drawerLabel: t('drawer.home') }}
      />
      <Drawer.Screen
        name="DoctorsDrawer"
        component={DoctorsStack}
        options={{ drawerLabel: t('drawer.doctors') }}
      />
      <Drawer.Screen
        name="ProfileDrawer"
        component={ProfileStack}
        options={{ drawerLabel: t('drawer.profile') }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
