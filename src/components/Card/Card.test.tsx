import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Card from './Card';
import Icon from '../Icon';
import { StyleSheet } from 'react-native';

describe('Button component test', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Card
        title="Card title"
        subtitle="Card subtitle"
        rightNode={<Icon name="heart-plus" />}
        closeIconName="checkup"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('overrides styles', () => {
    const { getByTestId } = render(
      <Card
        containerStyle={{ padding: 0 }}
        style={{ padding: 0 }}
        title="Card title"
      />,
    );

    const cardContainer = getByTestId('card-container');
    expect(StyleSheet.flatten(cardContainer.props.style).padding).toBe(0);

    const card = getByTestId('card');
    expect(StyleSheet.flatten(card.props.style).padding).toBe(0);
  });

  it('invokes a function when close icon is pressed', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Card title="Card title" onClose={mockFn} />,
    );
    const closeIcon = getByTestId('close-icon');
    fireEvent.press(closeIcon);
    expect(mockFn).toBeCalled();
  });
});
