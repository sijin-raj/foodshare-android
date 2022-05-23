import React, { FC, ReactNode } from 'react';
import { View, ViewStyle , Image  } from 'react-native';
import Icon, { IconName } from '../Icon';
import Text from '../Text';
import styles, { ICON_SIZE } from './styles';

interface Props {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  title: string;
  subtitle?: string;
  rightNode?: ReactNode;
  closeIconName?: IconName;
  onClose?: () => void;
}

const Card: FC<Props> = ({
  style,
  containerStyle,
  title,
  subtitle,
  rightNode,
  closeIconName,
  onClose,
}) => {
  return (
    <View testID="card-container" style={[styles.base, containerStyle]}>
      {/* <Icon
        testID="close-icon"
        name={closeIconName ? closeIconName : 'close-filled'}
        style={styles.icon}
        size={ICON_SIZE}
        onPress={onClose}
      /> */}
      <View testID="card" style={[styles.card, style]}>
        <View style={styles.textContainer}>
          <Text color="white" level="600" size="head-24">
            {title}
          </Text>
          <Text color="white" size="body-14" style={styles.opacity}>
            {subtitle ? subtitle : ''}
          </Text>
        </View>
        
          <Image 
          source={require('../../../assets/1.png')}  style={styles.rightNode}/>
        
      </View>
    </View>
  );
};

export default Card;
