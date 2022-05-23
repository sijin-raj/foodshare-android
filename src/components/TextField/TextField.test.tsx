import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextField from './TextField';

const mockFn = jest.fn();
describe('Button component test', () => {
  it('renders correctly with default params', () => {
    const { toJSON } = render(
      <TextField placeholder="placeHolder" value="" onChangeText={mockFn} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('invokes function on text change', () => {
    const { getByTestId } = render(
      <TextField value="Hello" onChangeText={mockFn} />,
    );
    const field = getByTestId('text-field');
    fireEvent.changeText(field, 'world');
    expect(mockFn).toBeCalledWith('world');
  });
});
