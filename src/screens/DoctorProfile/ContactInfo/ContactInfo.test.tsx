import React from 'react';
import { render } from '@testing-library/react-native';
import ContactInfo from './ContactInfo';

describe('Button component test', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <ContactInfo
        address="Address"
        email="email@test.com"
        phone="+90 545 693 9297"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
