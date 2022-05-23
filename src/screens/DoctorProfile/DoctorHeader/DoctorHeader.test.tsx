import React from 'react';
import { render } from '@testing-library/react-native';
import DoctorHeader from './DoctorHeader';

describe('Button component test', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <DoctorHeader
        title="Title"
        subtitle="Subtitle"
        imagURL="http://www.test.com/image.jpg"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
