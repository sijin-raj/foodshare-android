import React, { FC } from 'react';
import { render } from '@testing-library/react-native';
import Appointments from './Appointments';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

const wrapper: FC = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
describe('Button component test', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Appointments
        title="Title"
        availableDates={[
          new Date(2021, 5, 5, 10, 45, 0),
          new Date(2021, 5, 6, 15, 18, 0),
        ]}
        onPress={() => {}}
      />,
      { wrapper },
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
