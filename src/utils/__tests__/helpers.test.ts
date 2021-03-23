import { normalizeData, isObjectEmpty, formatUsers, formatTimezone, formatViews } from '../helpers';

// mockData
import { locations } from '../../testing/msw/mockData';

describe('helpers tests', () => {
    it('should normalize data', () => {
        expect(normalizeData(locations)).toMatchSnapshot();
    });

    it('should check for empty objects', () => {
        expect(isObjectEmpty({})).toBe(true);
        expect(isObjectEmpty({ test: 'test' })).toBe(false);
    });

    it('should properly format user count', () => {
        const expected = '653 Users';
        expect(formatUsers(653)).toBe(expected);
    });

    it('should properly format time', () => {
        const expected = '05/03/2021, 10:10:35';
        expect(formatTimezone(locations[0].createdAt)).toBe(expected);
    });

    it('should properly format views', () => {
        // only one
        const expected = '1 View';
        expect(formatViews(1)).toBe(expected);

        // zero or multiple
        const expected2 = '2 Views';
        expect(formatViews(2)).toBe(expected2);
    });
});
