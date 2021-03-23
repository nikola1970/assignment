import React from 'react';
import { render, screen, userEvent } from '../../../../testing/testUtils';

// component
import { LocationCard } from '..';

// mocked data
import { locations } from '../../../../testing/msw/mockData';

// helpers
import { formatUsers, formatTimezone, formatViews } from '../../../../utils/helpers';

describe('<LocationCard /> component', () => {
    const { id, name, createdAt, userCount, views } = locations[0];
    test('should render LocationCard properly and should properly detect a click', () => {
        const onClick = jest.fn();
        render(
            <LocationCard
                id={id}
                name={name}
                createdAt={createdAt}
                userCount={userCount}
                views={views}
                onCardClick={onClick}
            />
        );
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(formatTimezone(createdAt))).toBeInTheDocument();
        expect(screen.getByText(formatUsers(userCount))).toBeInTheDocument();
        expect(screen.getByText(formatViews(views))).toBeInTheDocument();

        // detect click
        userEvent.click(screen.getByTestId('location-card'));
        expect(onClick).toHaveBeenCalled();
    });
});
