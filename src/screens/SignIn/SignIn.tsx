import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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

const SignUp: FC = () => {
  const { t } = useTranslation('signIn');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { navigate, goBack } = useNavigation();
  const { login } = useAuth();
  const toastMessage = useToastMessage();

  const handleLogin = () => {
    login(email, password).catch(error => toastMessage.error(error));
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
          <TextField
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
            placeholder={t('form.password.placeholder')}
          />
        </View>
        <Text
          size="body-16"
          align="right"
          color="primary"
          onPress={() => navigate('ForgotPassword')}
          style={StyleSheet.flatten([styles.forgotPass, styles.underline])}>
          {t('form.forgotPassword.text')}
        </Text>
        <Button
          style={styles.button}
          theme="primary"
          size="big"
          onPress={handleLogin}>
          {t('form.submit.text')}
        </Button>
      </View>
      <Text size="body-20" align="center" color="white">
        {t('haveAccount') + ' '}
        <Text
          style={styles.underline}
          size="body-20"
          level="700"
          color="white"
          onPress={() => navigate('SignUp')}>
          {t('signUp')}
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
