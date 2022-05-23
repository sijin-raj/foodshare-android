import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Text';
import colors, { palette } from '../../theme/colors';

describe('Button component test', () => {
  it('renders correctly with default params', () => {
    const { toJSON } = render(<Text>Hello</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('overrides default style style', () => {
    const { getByText } = render(<Text style={{ color: 'blue' }}>Hello</Text>);
    const txt = getByText('Hello');
    expect(txt.props.style.color).toBe('blue');
  });

  it('sets font weight and text align', () => {
    const { getByText } = render(
      <Text align="center" level="700">
        Hello
      </Text>,
    );
    const txt = getByText('Hello');
    expect(txt.props.style.textAlign).toBe('center');
    expect(txt.props.style.fontWeight).toBe('700');
  });

  it('renders correctly with different sizes', () => {
    const { rerender, getByText } = render(<Text size="body-16">Hello</Text>);
    const txt = getByText('Hello');
    expect(txt.props.style.fontSize).toBe(16);

    rerender(<Text size="body-10">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(10);

    rerender(<Text size="body-14">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(14);

    rerender(<Text size="body-20">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(20);

    rerender(<Text size="body-22">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(22);

    rerender(<Text size="button-22">Hello</Text>);
    expect(txt.props.style.lineHeight).toBe(28);

    rerender(<Text size="head-24">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(24);

    rerender(<Text size="head-20">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(20);

    rerender(<Text size="head-30">Hello</Text>);
    expect(txt.props.style.fontSize).toBe(30);
  });

  it('renders correctly with different colors', () => {
    const { rerender, getByText } = render(<Text color="primary">Hello</Text>);
    const txt = getByText('Hello');
    expect(txt.props.style.color).toBe(colors.primary);

    rerender(<Text color="secondary">Hello</Text>);
    expect(txt.props.style.color).toBe(palette.primary.dark);

    rerender(<Text color="black">Hello</Text>);
    expect(txt.props.style.color).toBe(colors.black);

    rerender(<Text color="white">Hello</Text>);
    expect(txt.props.style.color).toBe(colors.white);

    rerender(<Text color="light">Hello</Text>);
    expect(txt.props.style.color).toBe(colors.light);

    rerender(<Text color="dark">Hello</Text>);
    expect(txt.props.style.color).toBe(colors.dark);
  });
});
