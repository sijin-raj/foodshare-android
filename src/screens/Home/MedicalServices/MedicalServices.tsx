import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ViewStyle } from 'react-native';
import Button from '../../../components/Button';
// import { IconName } from '../../../components/Icon';
import styles from './styles';

const SERVICES: {
  id: string;
  iconName: string;
}[] = [
  { id: '1', iconName: 'heart-beat' },
  { id: '2', iconName: 'badge' },
  { id: '3', iconName: 'shot' },
  { id: '4', iconName: 'shot' },
  { id: '5', iconName: 'heart-beat' },

];

interface Props {
  style?: ViewStyle;
  onPress?: (services: Array<string>) => void;
}

const MedicalServices = ({ style, onPress }: Props) => {
  const { t } = useTranslation('home');
  const [selected, setSelected] = useState<Array<string>>([]);

  return (
    <Fragment>
      <View style={[styles.base, style]}>
        {SERVICES.map(({ id, iconName }, index) => (
          <Button
            key={id}
            style={(index + 1) % 4 ? styles.button : undefined}
            highlight={false}
            theme={selected.includes(id) ? 'primary' : 'grey'}
            size="squareIcon"
            iconName={iconName}
            onPress={() =>
              selected.includes(id)
                ? setSelected(selected.filter(item => item !== id))
                : setSelected([...selected, id])
            }>
            {t(('services.types.' + iconName) as any)}
          </Button>
        ))}
      </View>
      <Button
        testID="search-button"
        onPress={() => onPress && onPress(selected)}
        style={styles.submitButton}>
        {t('services.button')}
      </Button>
    </Fragment>
  );
};

export default MedicalServices;
