import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import { StyleSheet } from 'react-native';

describe('Button component test', () => {
  it('renders correctly with default params', () => {
    const { toJSON } = render(<Button>Hello</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders primary small button', () => {
    const { getByTestId } = render(
      <Button theme="primary" size="small">
        Hello
      </Button>,
    );
    const btn = getByTestId('Button');
    const style = StyleSheet.flatten(btn.props.style);
    expect(style.backgroundColor).toBe(colors.primary);
    expect(style.padding).toBe(spacing.small1);
  });

  it('renders secondary medium small button', () => {
    const { getByTestId } = render(
      <Button theme="secondary" size="medium">
        Hello
      </Button>,
    );
    const btn = getByTestId('Button');
    const style = StyleSheet.flatten(btn.props.style);
    expect(style.backgroundColor).toBe(colors.white);
    expect(style.padding).toBe(spacing.small3);
  });

  it('renders grey big small button', () => {
    const { getByTestId } = render(
      <Button theme="grey" size="big">
        Hello
      </Button>,
    );
    const btn = getByTestId('Button');
    const style = StyleSheet.flatten(btn.props.style);
    expect(style.backgroundColor).toBe(colors.light);
    expect(style.padding).toBe(spacing.medium1);
  });

  it('overrides styles', () => {
    const { getByTestId } = render(
      <Button style={{ borderRadius: 0 }}>Hello</Button>,
    );
    const btn = getByTestId('Button');
    const style = StyleSheet.flatten(btn.props.style);
    expect(style.borderRadius).toBe(0);
  });

  it('invokes a function when pressed', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button onPress={mockFn}>BUTTON</Button>);
    const btn = getByText('BUTTON');
    fireEvent.press(btn);
    expect(mockFn).toBeCalled();
  });
});
