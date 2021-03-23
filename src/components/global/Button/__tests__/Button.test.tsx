import React from 'react';
import { render, userEvent, screen } from '../../../../testing/testUtils';

// component
import { Button } from '..';

describe('<Button /> component', () => {
    test('should render children properly', () => {
        const buttonText = 'My Button';
        render(<Button>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    test('should be able to pass a click handler to the button', () => {
        const clickHandler = jest.fn();
        render(<Button onClick={clickHandler}>My Btn</Button>);
        userEvent.click(screen.getByRole('button'));
        expect(clickHandler).toHaveBeenCalled();
    });
});
