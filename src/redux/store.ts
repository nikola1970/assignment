import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// reducers
import { reducers } from './features';

export const store = configureStore({
    reducer: {
        ...reducers,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
