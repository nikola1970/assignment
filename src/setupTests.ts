import '@testing-library/jest-dom/extend-expect';

import { server } from './testing/msw/server';

beforeAll(() => {
    // Enable msw mocking in tests.
    server.listen();
});

afterEach(() => {
    // Reset any runtime handlers tests may use.
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});
