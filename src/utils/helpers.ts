export function normalizeData<T extends { id: string }>(arr: Array<T>): { [key: string]: T } {
    return arr.reduce((obj: { [key: string]: T }, item: T) => {
        obj[item.id] = item;
        return obj;
    }, {});
}

export function isObjectEmpty(obj: { [key: string]: unknown }) {
    return Object.keys(obj).length === 0;
}

export function formatUsers(userCount: string | number) {
    return `${userCount} Users`;
}

export function formatTimezone(date: string) {
    return new Date(date).toLocaleString();
}

export function formatViews(views: number | string) {
    return `${views} ${views === 1 ? 'View' : 'Views'}`;
}
