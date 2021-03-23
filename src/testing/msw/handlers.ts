import { rest } from 'msw'; // eslint-disable-line

// mocked data
import { locations } from './mockData';

// constants
import { GET_LOCATIONS_API } from '../../utils/constants';

export const handlers = [
    rest.get(GET_LOCATIONS_API, (req, res, ctx) => {
        return res(ctx.json(locations));
    }),
];
