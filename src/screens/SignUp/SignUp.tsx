import React, { FC, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import HomeBgPattern from '../../../assets/homeBgPattern.svg';
import Text from '../../components/Text';
import Icon from '../../components/Icon/Icon';
import { useTranslation } from 'react-i18next';
import useAuth from '../../services/useAuth';
import useToastMessage from '../../services/useToastMessage';

const SignUp: FC = () => {
  const { t } = useTranslation('signup');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { register, loading } = useAuth();
  const toastMessage = useToastMessage();
  const { goBack, navigate } = useNavigation();

  const handleSubmit = () => {
    register(name, email, password).catch(err => {
      toastMessage.error(err);
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
            value={name}
            onChangeText={setName}
            placeholder={t('form.fullName.placeholder')}
          />
          <TextField
            style={styles.field}
            value={email}
            autoCapitalize="none"
            textContentType="emailAddress"
            autoCompleteType="email"
            onChangeText={setEmail}
            placeholder={t('form.email.placeholder')}
          />
          <TextField
            value={password}
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder={t('form.password.placeholder')}
          />
        </View>
        <Button
          style={styles.button}
          loading={loading}
          theme="primary"
          size="big"
          onPress={handleSubmit}>
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
          onPress={() => navigate('SignIn')}>
          {t('signIn')}
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
