import React from 'react';
import { render, screen, userEvent, waitFor } from '../../../../testing/testUtils';

// component
import { LocationModal } from '..';

// mocked data
import { locations } from '../../../../testing/msw/mockData';

// helpers
import { formatUsers, formatTimezone, formatViews } from '../../../../utils/helpers';

describe('<LocationModal /> component', () => {
    const { name, createdAt, userCount, views } = locations[0];
    test('should properly render LocationModal and detect click handler', async () => {
        const onClick = jest.fn();
        render(<LocationModal isOpen onClose={onClick} location={locations[0]} />);

        await waitFor(() => {
            expect(screen.getByText(name)).toBeInTheDocument();
            expect(screen.getByText(formatTimezone(createdAt))).toBeInTheDocument();
            expect(screen.getByText(formatUsers(userCount))).toBeInTheDocument();
            expect(screen.getByText(formatViews(views))).toBeInTheDocument();

            userEvent.click(screen.getByText(/done/i));
            expect(onClick).toHaveBeenCalled();
        });
    });
});
