import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RecentList from './RecentList';
import doctorList from './__data__/doctorList';
jest.mock('@react-native-firebase/firestore', () => ({
  Timestamp: { fromDate: jest.fn },
}));

describe('Button component test', () => {
  it('renders correctly with image list', () => {
    const { toJSON } = render(
      <RecentList doctors={doctorList} loading={false} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with empty list', () => {
    const { toJSON } = render(<RecentList doctors={[]} loading={false} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('invokes a function when extra button is pressed', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <RecentList doctors={doctorList} onExtraPress={mockFn} loading={false} />,
    );
    const btn = getByTestId('Button');
    fireEvent.press(btn);
    expect(mockFn).toBeCalled();
  });

  it('invokes a function when a doctor pressed', () => {
    const mockFn = jest.fn();
    const { getAllByTestId } = render(
      <RecentList doctors={doctorList} onPress={mockFn} loading={false} />,
    );
    const avatar = getAllByTestId('avatar');
    fireEvent.press(avatar[0]);
    expect(mockFn).toBeCalledWith('1');
  });
});
