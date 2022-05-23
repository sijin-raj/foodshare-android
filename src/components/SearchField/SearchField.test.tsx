import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextField from './SearchField';

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

  it('invokes function on search press', () => {
    const { getByTestId } = render(
      <TextField value="Hello" onChangeText={mockFn} handleSearch={mockFn} />,
    );
    const search = getByTestId('search-icon');
    fireEvent.press(search);
    expect(mockFn).toBeCalledWith('Hello');
  });

  it('shows clear icon when input is dirty and invokes function on clear icon press', () => {
    const { rerender, getByTestId, queryByTestId } = render(
      <TextField value="" onChangeText={mockFn} handleClear={mockFn} />,
    );

    expect(queryByTestId('clear-icon')).toBeFalsy();

    rerender(
      <TextField value="text" onChangeText={mockFn} handleClear={mockFn} />,
    );

    const clear = getByTestId('clear-icon');
    fireEvent.press(clear);
    expect(mockFn).toBeCalled();
  });
});
