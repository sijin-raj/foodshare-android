import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import Avatar from '../../../components/Avatar';
import Text from '../../../components/Text';
import styles from './styles';

const AVATAR_SIZE = 70;

interface Props {
  title: string;
  subtitle: string;
  imagURL: string;
}

const DoctorHeader = ({ title, subtitle, imagURL }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <Avatar size={AVATAR_SIZE} shape="rounded">
        <Image
          resizeMode="contain"
          source={{
            uri: imagURL,
            height: 70,
            width: 100,
          }}
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <ActivityIndicator
            style={StyleSheet.absoluteFill}
            color="white"
            size="large"
          />
        )}
      </Avatar>
      <View style={styles.textContainer}>
        <Text color="black" size="head-20">
          {title}
        </Text>
        <Text color="dark" size="body-14">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default DoctorHeader;
