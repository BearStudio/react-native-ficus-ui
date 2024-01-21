import { render, screen } from '@testing-library/react-native';
import { Divider } from './divider.component';
import React from 'react';

describe('Divider component', () => {
  it('should render correctly', () => {
    const dividerId = 'dividerId';

    render(<Divider testID={dividerId} />);

    const divider = screen.getByTestId(dividerId);
    expect(divider).toBeDefined();
  });

  it('should apply orientation prop correctly', () => {
    const horizontalDividerId = 'horizonaltDivider';
    const verticalDividerId = 'verticalDivider';

    render(
      <>
        <Divider testID={horizontalDividerId} />
        <Divider testID={verticalDividerId} orientation={'vertical'} />
      </>
    );

    const horizontalDivider = screen.getByTestId(horizontalDividerId);
    const verticalDivider = screen.getByTestId(verticalDividerId);

    expect(horizontalDivider).toHaveStyle({
      borderLeftWidth: 0,
      borderTopWidth: 1,
    });
    expect(verticalDivider).toHaveStyle({
      borderLeftWidth: 1,
      borderTopWidth: 0,
    });
  });

  it('should apply size prop correctly', () => {
    const horizontalDividerId = 'horizonaltDivider';
    const verticalDividerId = 'verticalDivider';

    render(
      <>
        <Divider testID={horizontalDividerId} size={5} />
        <Divider testID={verticalDividerId} orientation={'vertical'} size={5} />
      </>
    );

    const horizontalDivider = screen.getByTestId(horizontalDividerId);
    const verticalDivider = screen.getByTestId(verticalDividerId);

    expect(horizontalDivider).toHaveStyle({ borderTopWidth: 5 });
    expect(verticalDivider).toHaveStyle({ borderLeftWidth: 5 });
  });
});
