import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// constants
import { GET_LOCATIONS_API } from '../../utils/constants';

// types
import { Location } from '../../types';

// helpers
import { normalizeData } from '../../utils/helpers';

type DashboardState = {
    locations: { [key: string]: Location };
    location: Location;
    isLoading: boolean;
    error: boolean;
};

const initialState: DashboardState = {
    locations: {},
    location: {} as Location,
    isLoading: false,
    error: false,
};

export const getLocations = createAsyncThunk('dashboard/getLocations', async () => {
    const response = await fetch(GET_LOCATIONS_API);
    const locations = await response.json();

    return { locations: locations.map((loc: Location) => ({ ...loc, views: 0 })) };
});

export const dashboardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setSelectedLocation: (state, action) => {
            const location = state.locations[action.payload];
            state.locations[action.payload] = { ...location, views: location.views + 1 };
            state.location = state.locations[action.payload];
        },
    },
    extraReducers: builder => {
        builder.addCase(getLocations.pending, (state, _) => {
            state.isLoading = true;
            state.error = false;
        });

        builder.addCase(getLocations.fulfilled, (state, action) => {
            state.isLoading = false;
            state.locations = normalizeData<Location>(action.payload.locations);
        });

        builder.addCase(getLocations.rejected, (state, _) => {
            state.isLoading = false;
            state.error = true;
        });
    },
});

export const { setSelectedLocation } = dashboardSlice.actions;

export const _selectLocations = (state: RootState) => state.dashboard.locations;
export const _selectLocation = (state: RootState) => state.dashboard.location;
export const _selectLoading = (state: RootState) => state.dashboard.isLoading;
export const _selectError = (state: RootState) => state.dashboard.error;

export default dashboardSlice.reducer;
