import React from 'react';
import { View } from 'react-native';
import Text from '../../../components/Text';
import styles from './styles';

interface Props {
  address: string;
  phone: string;
  email: string;
}
const ContactInfo = ({ address, phone, email }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.textContainer, styles.divider]}>
        <Text color="dark" size="body-14" selectable>
          {address}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text color="dark" size="body-14" selectable>
          {phone}
        </Text>
        <Text color="dark" size="body-10" selectable>
          {email}
        </Text>
      </View>
    </View>
  );
};

export default ContactInfo;
