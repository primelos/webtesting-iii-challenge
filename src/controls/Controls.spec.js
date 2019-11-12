import React from 'react';
import { render,  fireEvent, toBeDisabled } from '@testing-library/react';
import "react-testing-library/cleanup-after-each";

import Controls from './Controls'

test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot()
})

test('Door can be toggled open on click.', () => {
    const toggleOpenMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleOpenMock} closed={true} />);

    const openButton = getByText(/open gate/i);
    fireEvent.click(openButton);    
    expect(toggleOpenMock).toHaveBeenCalled(); 
})


test('Door Closed', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosedMock} closed={false} />)

    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);    
    expect(toggleClosedMock).toHaveBeenCalled(); 

})

test('Door Closed', () => {
    const toggleLockedMock = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLockedMock} locked={false} />)

    const lockButton = getByText(/lock/i);
    fireEvent.click(lockButton);    
    expect(toggleLockedMock).not.toHaveBeenCalled(); 

})

test('Door Open', () => {
    const toggleunLockedMock = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleunLockedMock} locked={true} />)

    const unlockButton = getByText(/unlock/i);
    fireEvent.click(unlockButton);    
    expect(toggleunLockedMock).not.toHaveBeenCalled(); 

})

test('buttons to toggle are provided ', () =>{
    const {getByText} = render(<Controls />);

    expect(/close gate/i);
    expect(/lock gate/i);
});

test('closed toggle button is disabled if the gate is locked', () =>{
    const closedButtonMock = jest.fn();

    const {getByText} = render(<Controls toggleClosed={closedButtonMock} closed={true} locked={true} />);
    expect(getByText(/open gate/i)).toBeDisabled();
});