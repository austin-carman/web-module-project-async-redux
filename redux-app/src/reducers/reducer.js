import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/actions';

const initialState = {
    dogs: [],
    isFetching: false,
    error:'',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                dogs: action.payload,
                isFetching: false
            });
        case(FETCH_FAIL):
            return({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}

export default reducer;