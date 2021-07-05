// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard'


test('should match snapshot', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})