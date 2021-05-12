import { FIND_PLAYER, CLEAR_INPUT, FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions/searchPlayerActions';

const initialState = {
    playerSearched: '',
    isFetching: false,
    playerStats: {},
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FIND_PLAYER):
            return({
                ...state,
                playerSearched: action.payload
            });
        case(CLEAR_INPUT):
            return({
                ...state,
                playerSearched: ''
            });
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                playerStats: action.payload,
                isFetching: false
            })
        case(FETCH_ERROR):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return(state);
    }
};

export default reducer;