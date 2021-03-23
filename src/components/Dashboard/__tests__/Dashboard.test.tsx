import React from 'react';
import { rest } from 'msw';

import {
    render,
    screen,
    userEvent,
    waitFor,
    waitForElementToBeRemoved,
} from '../../../testing/testUtils';

// component
import { Dashboard } from '..';

// mocked data
import { locations } from '../../../testing/msw/mockData';

// server
import { server } from '../../../testing/msw/server';

// constants
import { GET_LOCATIONS_API } from '../../../utils/constants';

// just to disbale jest console.error regarding msw header which reports as forbiden
beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('<Dashboard /> component', () => {
    test('should show loading screen', async () => {
        render(<Dashboard />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    test('should hide loading screen after api call is complete', async () => {
        render(<Dashboard />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    test('should render locations', async () => {
        render(<Dashboard />);

        await waitFor(() => {
            expect(screen.queryAllByTestId('location-card').length).toBe(locations.length);
        });
    });

    test('should open location modal on click of the card, and show relevant data, increment a view, be able to close a modal', async () => {
        render(<Dashboard />);

        await waitFor(() => {
            userEvent.click(screen.queryAllByTestId('location-card')[0]);
        });

        // show modal
        expect(screen.getByTestId('modal')).toBeInTheDocument();

        // show relevant location description
        expect(screen.getByText(locations[0].description)).toBeInTheDocument();

        // increment counter
        expect(screen.getAllByText('1 View')[0]).toBeInTheDocument();

        // close modal
        userEvent.click(screen.getByText(/done/i));
        await waitForElementToBeRemoved(() => screen.getByTestId('modal'));
        expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });

    test('should show an error message if api returns an error', async () => {
        server.use(
            rest.get(GET_LOCATIONS_API, (req, res, ctx) => {
                return res(ctx.status(404));
            })
        );

        render(<Dashboard />);

        await waitFor(() => {
            expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
        });
    });
});
