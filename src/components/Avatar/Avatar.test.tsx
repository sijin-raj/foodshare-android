import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Avatar from './Avatar';
import colors from '../../theme/colors';
import { Image, StyleSheet } from 'react-native';

const SIZE = 50;
const ImageDemo = () => (
  <Image
    source={{
      uri: 'https://i.ibb.co/4WGLRjs/person.png',
      width: SIZE,
      height: SIZE,
    }}
  />
);

describe('Avatar component test', () => {
  it('renders correctly with default params', () => {
    const { toJSON } = render(
      <Avatar size={SIZE}>
        <ImageDemo />
      </Avatar>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders secondary circular avatar', () => {
    const { getByTestId } = render(
      <Avatar size={SIZE} theme="secondary" shape="circular">
        <ImageDemo />
      </Avatar>,
    );
    const avatar = getByTestId('avatar');
    const style = StyleSheet.flatten(avatar.props.style);
    expect(style.backgroundColor).toBe(colors.secondary);
    expect(style.borderRadius).toBe(0.5 * SIZE);
  });

  it('renders rounded avatar with custom edge radius', () => {
    const ROUND_SIZE = 0.2;
    const { getByTestId } = render(
      <Avatar size={SIZE} shape="rounded" roundness={ROUND_SIZE}>
        <ImageDemo />
      </Avatar>,
    );
    const avatar = getByTestId('avatar');
    const style = StyleSheet.flatten(avatar.props.style);
    expect(style.borderRadius).toBe(ROUND_SIZE * SIZE);
  });

  it('overrides default style with style prop', () => {
    const CUSTOM_PADDING = 32;
    const { getByTestId } = render(
      <Avatar size={SIZE} style={{ padding: CUSTOM_PADDING }}>
        <ImageDemo />
      </Avatar>,
    );
    const avatar = getByTestId('avatar');
    const style = StyleSheet.flatten(avatar.props.style);
    expect(style.padding).toBe(CUSTOM_PADDING);
  });

  it('invokes a function when pressed', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Avatar size={SIZE} onPress={mockFn}>
        <ImageDemo />
      </Avatar>,
    );
    const avatar = getByTestId('avatar');
    fireEvent.press(avatar);
    expect(mockFn).toBeCalled();
  });
});
