import React from 'react';
import { View } from 'react-native';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import styles from './styles';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  hours:string;
 
}
const Appointments = ({ title,  hours }: Props) => {
  const { t } = useTranslation('doctorProfile');
  return (
    <View style={styles.container}>
      <Text color="black" size="head-24" style={styles.title}>
        {title}
      </Text>
      <View style={styles.listContainer}>
      
        <Text color="black" size="body-20" style={styles.title} selectable >
         {hours}
        </Text>
      </View>
    </View>
  );
};

export default Appointments;
