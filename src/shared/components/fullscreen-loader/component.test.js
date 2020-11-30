import React from 'react';
import {render} from '@testing-library/react-native';

import FullscreenLoader from './component';

test('FullscreenLoader should match snapshot', () => {
  const {toJSON} = render(<FullscreenLoader isLoading={true} description="Test Descr" />);

  expect(toJSON()).toMatchSnapshot();
});

test('FullscreenLoader should have passed description text if loading is true', () => {
  const {getByText} = render(<FullscreenLoader isLoading={true} description="Test Descr" />);

  expect(getByText('Test Descr')).not.toBeNull();
});

test('FullscreenLoader should not have passed description text if loading is false', () => {
  const {queryByText} = render(<FullscreenLoader isLoading={false} description="Test Descr" />);

  expect(queryByText('Test Descr')).toBeNull();
});
