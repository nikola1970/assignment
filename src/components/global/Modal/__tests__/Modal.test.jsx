import React from 'react'; // eslint-disable-line
import { render, userEvent, screen } from '../../../../testing/testUtils';


// component
import { Modal } from '..';

describe('<Modal /> component', () => {
    test('should render modal body if "isOpen" is true', () => {
        const buttonText = 'My Modal';
        render(<Modal isOpen >{buttonText}</Modal>);
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    test('should not render modal body if "isOpen" is false', () => {
        const buttonText = 'My Modal';
        render(<Modal isOpen={false} >{buttonText}</Modal>);
        expect(screen.queryByText(buttonText)).not.toBeInTheDocument();
    });

    test('should fire onClose event', () => {
        const closeHndler = jest.fn();
        render(<Modal isOpen  onClose={closeHndler}>My Modal</Modal>);
        userEvent.click(screen.getByTestId('close-modal-icon'));
        expect(closeHndler).toHaveBeenCalled();
    });
 
});

