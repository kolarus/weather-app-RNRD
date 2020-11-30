import React from 'react';
import {render} from '@testing-library/react-native';

import RainyWrapper from './component';

test('RainyWrapper should match snapshot', () => {
  const {toJSON} = render(<RainyWrapper />);

  expect(toJSON()).toMatchSnapshot();
});
