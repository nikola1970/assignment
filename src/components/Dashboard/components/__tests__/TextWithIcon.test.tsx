import React from 'react';
import { render, screen } from '../../../../testing/testUtils';

// component
import { TextWithIcon } from '..';

describe('<TextWithIcon /> component', () => {
    test('should properly render TextWithIcon', () => {
        const text = 'Some text';

        const { container } = render(<TextWithIcon text={text} icon="users" />);

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(container.querySelector('svg')).toBeInTheDocument();
    });
});
