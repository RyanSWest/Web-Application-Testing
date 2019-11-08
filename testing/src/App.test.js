import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
 import App from './App';

it('renders text Baseball', () => {
  const wrapper = rtl.render(
    <h1 className = "baseball">Baseball</h1>
  );
  console.log(wrapper.debug())
  const element = wrapper.queryByText(/baseball/i);
  expect(element).toBeTruthy();
});
