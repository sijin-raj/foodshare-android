import React from 'react';
import { View } from 'react-native';
import Text from '../../../components/Text';
import styles from './styles';

interface Props {
  title: string;
  details: string;
}
const Description = ({ title, details }: Props) => {
  return (
    <View style={styles.container}>
      <Text color="black" size="head-24" style={styles.title}>
        {title}
      </Text>
      <Text color="dark" size="body-16" selectable>
        {details}
      </Text>
    </View>
  );
};

export default Description;
