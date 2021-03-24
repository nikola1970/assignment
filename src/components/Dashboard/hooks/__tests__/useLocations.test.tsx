import React from 'react';
import { rest } from 'msw';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';

// hook
import { useLocations } from '..';

// store
import { store } from '../../../../redux/store';

// mocked data
import { locations } from '../../../../testing/msw/mockData';

// helpers
import { normalizeData } from '../../../../utils/helpers';

// mock server
import { server } from '../../../../testing/msw/server';

// constants
import { GET_LOCATIONS_API } from '../../../../utils/constants';

type ProviderProps = {
    reduxStore: Store;
    children: React.ReactElement;
};

const ReduxProvider = ({ children, reduxStore }: ProviderProps) => (
    <Provider store={reduxStore}>{children}</Provider>
);

const Wrapper = ({ children }: { children: React.ReactElement }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
);

describe('useLocations hook', () => {
    test('should properly fetch data and update values', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useLocations(), {
            wrapper: Wrapper,
        });

        expect(result.current.location).toEqual({});
        expect(result.current.locations).toEqual({});
        expect(result.current.isLoading).toBe(true);
        expect(result.current.error).toBe(false);

        await waitForNextUpdate();

        expect(result.current.locations).toEqual(normalizeData(locations));
        expect(result.current.isLoading).toBe(false);
    });

    test('should set error to true if there was an error fetching data', async () => {
        server.use(
            rest.get(GET_LOCATIONS_API, (req, res, ctx) => {
                return res(ctx.status(404));
            })
        );
        const { result, waitForNextUpdate } = renderHook(() => useLocations(), {
            wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(result.current.error).toBe(true);
    });
});
