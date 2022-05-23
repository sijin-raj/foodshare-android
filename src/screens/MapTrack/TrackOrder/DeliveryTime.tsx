import * as React from 'react';
import Container from '../../../components/Container';
import Text from '../../../components/Text';
import styles from './styles';

type DeliveryTimeProps = {};

const DeliveryTime: React.FC<DeliveryTimeProps> = () => {
  return (
    <Container style={styles.deliveryTimeContainer}>
      <Text >Findout  In Map</Text>
      <Text >
        Your Location
      </Text>
    </Container>
  );
};

export default DeliveryTime;
