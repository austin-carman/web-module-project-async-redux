import { FETCH_STATS, FETCH_STATS_SUCCESS, FIND_FIRST_NAME, FIND_LAST_NAME, CLEAR_INPUT, FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions/searchPlayerActions';

const initialState = {
    playerFirstName: '',
    playerLastName: '',
    isFetching: false,
    players: {},
    error: '',
    playerStats: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FIND_FIRST_NAME):
            return({
                ...state,
                playerFirstName: action.payload
            });
        case(FIND_LAST_NAME):
            return({
                ...state,
                playerLastName: action.payload
            });
        // case(CLEAR_INPUT):
        //     return({
        //         ...state,
        //         playerFirstName: '',
        //         playerLastName: '',
        //     });
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                players: action.payload,
                isFetching: false
            })
        case(FETCH_ERROR):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        case(FETCH_STATS):
            return({
                ...state,
                isFetching:true
            })
        case(FETCH_STATS_SUCCESS):
            return({
                ...state,
                playerStats: action.payload
            })
        default:
            return(state);
    }
};

export default reducer;