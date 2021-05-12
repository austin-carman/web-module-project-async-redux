import { FIND_PLAYER, CLEAR_INPUT } from '../actions/searchPlayerActions';

const initialState = {
    playerSearched: '',
    // playerStats: 
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
        default:
            return(state);
    }
};

export default reducer;