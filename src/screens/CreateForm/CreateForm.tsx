import React, { FC, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import Text from '../../components/Text';
import Icon from '../../components/Icon/Icon';
import { useTranslation } from 'react-i18next';
import useAuth from '../../services/useAuth';
import useToastMessage from '../../services/useToastMessage';

const CreateForm: FC = () => {
  const { t } = useTranslation('form');
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [foodtype, setFoodtype] = useState<string>('');
  const [numperson, setNumperson] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const { register, loading } = useAuth();
  const toastMessage = useToastMessage();
  const { goBack, navigate } = useNavigation();

  const handleSubmit = () => {
   
  };

  return (
    <View style={styles.container}>
      <Icon style={styles.back} name="left-arrow" size={24} onPress={goBack} />

      <View style={styles.paper}>
        <Text size="head-30" color="black" align="center" style={styles.title}>
          {t('title')}
        </Text>
        <Text
          size="body-16"
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
            placeholder={t('form.name.placeholder')}
          />
          <TextField
            style={styles.field}
            value={location}
            onChangeText={setLocation}
            placeholder={t('form.location.placeholder')}
          />
          <TextField
            style={styles.field}
            value={foodtype}
            autoCapitalize="none"
            onChangeText={setFoodtype}
            placeholder={t('form.foodtype.placeholder')}
          />
          <TextField
            style={styles.field}
            value={numperson}
            autoCapitalize="none"
            onChangeText={setNumperson}
            placeholder={t('form.numberPerson.placeholder')}
          /><TextField
          style={styles.field}
          value={comment}
          autoCapitalize="none"
          onChangeText={setComment}
          placeholder={t('form.comment.placeholder')}
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
      
    </View>
  );
};

export default CreateForm;
