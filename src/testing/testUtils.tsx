import React from 'react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// styled components theme
import { theme } from '../theme';

// store
import { store } from '../redux/store';

function ProvidersRender(ui: React.ReactNode) {
    return {
        ...rtlRender(
            <Provider store={store}>
                <ThemeProvider theme={theme}>{ui}</ThemeProvider>
            </Provider>
        ),
    };
}

export * from '@testing-library/react';
export { ProvidersRender as render, userEvent };
