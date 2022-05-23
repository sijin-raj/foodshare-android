import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import RecentList from './RecentList';
import doctorList from './__data__/doctorList';

const Container = (storyFn: any) => (
  <View style={styles.container}>{storyFn()}</View>
);

const RecentListDemo = () => (
  <RecentList
    doctors={doctorList}
    loading={false}
    onPress={id => console.log(id)}
    onExtraPress={() => console.log('extra pressed')}
  />
);

storiesOf('Recent list', module)
  .addDecorator(Container)
  .add('default', () => <RecentListDemo />);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(251, 251, 251, 1)',
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
