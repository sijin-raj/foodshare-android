import React, { FC, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import HomeBgPattern from '../../../assets/homeBgPattern.svg';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import { useTranslation } from 'react-i18next';
import useAuth from '../../services/useAuth';
import useToastMessage from '../../services/useToastMessage';

const ForgotPassword: FC = () => {
  const { t } = useTranslation('forgotPassword');
  const [email, setEmail] = useState<string>('');
  const { forgotPassword } = useAuth();
  const { navigate, goBack } = useNavigation();
  const toastMessage = useToastMessage();

  const handleSubmit = () => {
    forgotPassword(email)
      .then(() => {
        toastMessage.success(t('toastMessages.success'));
        navigate('Welcome');
      })
      .catch(() => {
        toastMessage.error(t('toastMessages.error'));
      });
  };

  return (
    <View style={styles.container}>
      <Icon style={styles.back} name="left-arrow" size={24} onPress={goBack} />
      <HomeBgPattern
        style={styles.background}
        height="100%"
        width="100%"
        preserveAspectRatio="xMinYMin slice"
      />
      <View style={styles.paper}>
        <Text size="head-30" color="black" align="center" style={styles.title}>
          {t('title')}
        </Text>
        <Text
          size="body-22"
          color="black"
          align="center"
          style={styles.subtitle}>
          {t('subtitle')}
        </Text>
        <View style={styles.fields}>
          <TextField
            style={styles.field}
            value={email}
            onChangeText={setEmail}
            placeholder={t('form.email.placeholder')}
            autoCapitalize="none"
            textContentType="emailAddress"
            autoCompleteType="email"
          />
        </View>
        <Button
          style={styles.button}
          theme="primary"
          size="big"
          onPress={handleSubmit}>
          {t('form.submit.text')}
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
