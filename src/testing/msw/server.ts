import { setupServer } from 'msw/node'; // eslint-disable-line
import { handlers } from './handlers';

export const server = setupServer(...handlers);
