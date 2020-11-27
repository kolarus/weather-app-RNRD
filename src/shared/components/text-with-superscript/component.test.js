import React from 'react';
import {render} from '@testing-library/react-native';

import TextWithSuperscript from './component';

test('TextWithSuperscript should match snapshot', () => {
  const {toJSON} = render(
    <TextWithSuperscript fontSize={10} superScript="o">
      2
    </TextWithSuperscript>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('TextWithSuperscript should render passed text', () => {
  const {getByText} = render(
    <TextWithSuperscript fontSize={10} superScript="o">
      2
    </TextWithSuperscript>,
  );

  expect(getByText('2')).not.toBeNull();
  expect(getByText('o')).not.toBeNull();
});

test('CommonText should render passed text with correct font size', () => {
  const {getByText} = render(
    <TextWithSuperscript fontSize={10} superScript="o">
      2
    </TextWithSuperscript>,
  );

  expect(getByText('2')).toHaveStyle({fontSize: 10});
});
