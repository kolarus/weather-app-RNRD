import React from 'react';
import {render} from '@testing-library/react-native';

import CommonText from './component';

test('CommonText should match snapshot', () => {
  const {toJSON} = render(<CommonText>Test</CommonText>);

  expect(toJSON()).toMatchSnapshot();
});

test('CommonText should render passed text', () => {
  const {getByText} = render(<CommonText>Test</CommonText>);

  expect(getByText('Test')).not.toBeNull();
});

test('CommonText should render passed text with correct font size', () => {
  const {getByText} = render(<CommonText fontSize={23}>Test</CommonText>);

  expect(getByText('Test')).toHaveStyle({fontSize: 23});
});
