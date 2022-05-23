import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Text from '../../components/Text';
import styles from './styles';
import DoctorCard from './DoctorCard';
import useDoctors from '../../services/useDoctors';
import colors from '../../theme/colors';

const ListHeader = () => {
  const { t } = useTranslation('doctors');

  return (
    <>
      <Text color="black" size="head-24" level="600">
        {t('title')}
      </Text>
      <Text color="dark" size="body-14">
        {t('subtitle')}
      </Text>
    </>
  );
};

const Doctors: FC = () => {
  const { doctors, loading } = useDoctors();
  return loading ? (
    <View style={[styles.container, styles.loadingContainer]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  ) : (
    <FlatList
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.content}
      data={doctors}
      ListHeaderComponent={ListHeader}
      ListHeaderComponentStyle={styles.listHeader}
      renderItem={({ item }) => <DoctorCard doctor={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default Doctors;
