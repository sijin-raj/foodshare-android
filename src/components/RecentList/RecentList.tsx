import React, { FC, useState } from 'react';
import {
  View,
  ViewStyle,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Avatar from '../Avatar';
import Button from '../Button';
import { Doctor } from '../../services/api/types';
import colors from '../../theme/colors';

const AVATAR_SIZE = 70;
const ITEM_COUNT_TO_SHOW = 4;

interface Props {
  style?: ViewStyle;
  doctors: Array<Doctor>;
  onPress?: (id: string) => void;
  onExtraPress?: () => void;
  loading: boolean;
}

const RecentList: FC<Props> = ({
  style,
  doctors,
  onPress,
  onExtraPress,
  loading,
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View testID="list" style={[styles.base, style]}>
      <View style={styles.list}>
        {doctors && doctors.length
          ? doctors.slice(0, ITEM_COUNT_TO_SHOW).map(doctor => (
              <Avatar
                key={doctor.id}
                theme="secondary"
                style={styles.avatar}
                onPress={() => onPress && onPress(doctor.id)}
                size={AVATAR_SIZE}
                shape="rounded"
                roundness={10}>
                <Image
                  resizeMode="contain"
                  width={50}
                  height={50}
                  fadeDuration={1}
                  source={{
                    uri: doctor.avatar,
                    width: 90,
                    height: 80,
                  }}
                  onLoad={() => setImageLoading(false)}
                />
                {imageLoading && (
                  <ActivityIndicator
                    style={StyleSheet.absoluteFill}
                    color={colors.primary}
                  />
                )}
              </Avatar>
            ))
          : undefined}
      </View>
      {doctors.length > ITEM_COUNT_TO_SHOW && (
        <Button
          loading={loading}
          style={styles.extraButton}
          onPress={() => onExtraPress && onExtraPress()}>
          {`+ ${doctors.length - ITEM_COUNT_TO_SHOW}`}
        </Button>
      )}
    </View>
  );
};

export default RecentList;
