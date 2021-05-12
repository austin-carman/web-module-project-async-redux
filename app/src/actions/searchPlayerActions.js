import axios from 'axios'

export const FIND_PLAYER = "FIND_PLAYER";
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';


export const findPlayer = (player) => {
    return({type: FIND_PLAYER, payload: player});
};

export const clearInput = () => {
    return({type: CLEAR_INPUT});
};

export const fetchPlayer = () => {
    return(dispatch => {
        dispatch({type: FETCH_START});

        axios.get('https://www.balldontlie.io/api/v1/season_averages?&player_ids[]=237')
            .then(res => {
                console.log(res.data.data[0]);
                dispatch({type: FETCH_SUCCESS, payload: res.data.data[0]}); // will be obj
            })
            .catch(err => {
                dispatch({type: FETCH_ERROR, payload: err});
            })
    })
};

// export const fetchStart = () => {
//     return({type: FETCH_START});
// };

// export const fetchSuccess = (player) => {
//     return({type: FETCH_SUCCESS, payload: player});
// };

// export const fetchError = (error) => {
//     return({type: FETCH_ERROR, payload: error});
// };