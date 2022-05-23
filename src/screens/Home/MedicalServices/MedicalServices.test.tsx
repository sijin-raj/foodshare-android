import React, { FC } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MedicalServices from './MedicalServices';
import { ReactTestInstance } from 'react-test-renderer';
import { StyleSheet } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

const wrapper: FC = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
describe('Button component test', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<MedicalServices />, { wrapper });
    expect(toJSON()).toMatchSnapshot();
  });

  it('overrides styles', () => {
    const { container } = render(<MedicalServices style={{ padding: 50 }} />);
    const baseView = StyleSheet.flatten(
      (container.children[0] as ReactTestInstance).props.style,
    );
    expect(baseView.padding).toBe(50);
  });

  it('invokes a function when close icon is pressed', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<MedicalServices onPress={mockFn} />);
    const btn = getByTestId('search-button');
    fireEvent.press(btn);
    expect(mockFn).toBeCalled();
  });
});
