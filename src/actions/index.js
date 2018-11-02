export const FETCH_REQUEST = 'FETCH_REQUEST';

export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';

export const FETCH_FAILED = 'FETCH_FAILED';

export function requestHits() {
    return {
        type: FETCH_REQUEST,
        isFetching: true
    }
}

export function updateHits(data) {
    return {
        type: FETCH_SUCCEEDED,
        isFetching: false,
        data
    }
}
export function errorHits(error) {
    return {
        type: FETCH_FAILED,
        isFetching: false,
        error
    }
}