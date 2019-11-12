// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display'

test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot()
})
test('Default setting is unlocked open.', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
});

test('open/closed...', () => {
    const { getByText } = render(<Display />);
    getByText(/locked/i) || getByText(/unlocked/i);
    getByText(/open/i) || getByText(/closed/i);
})


test('Uses green-led.', () => {
    const { queryByText } = render(<Display locked={true} />);
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass('red-led');
});

test('Uses green-led.', () => {
    const { queryByText } = render(<Display locked={false} />);
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass('green-led');
});