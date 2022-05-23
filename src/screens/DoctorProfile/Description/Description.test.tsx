import React from 'react';
import { render } from '@testing-library/react-native';
import Description from './Description';

describe('Button component test', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Description
        title="Title"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, autem."
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
