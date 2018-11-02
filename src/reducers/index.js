import {FETCH_FAILED, FETCH_REQUEST, FETCH_SUCCEEDED} from "../actions/index";

const initialState = {
    totalHits: 0,
    isFetching: false,
    error: ''
};

export default function hits(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCEEDED:
            return {
                totalHits: action.data.totalHits,
                isFetching: false,
                error: ''
            };
        case FETCH_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}