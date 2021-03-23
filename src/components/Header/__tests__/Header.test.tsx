import React from 'react';
import { render, screen } from '../../../testing/testUtils';

// component
import { Header } from '..';

describe('<Header /> component', () => {
    test('should render Header properly', () => {
        render(<Header />);
        expect(screen.getByText('All Locations')).toBeInTheDocument();
        expect(screen.getByText('ACME Locations')).toBeInTheDocument();
    });
});
