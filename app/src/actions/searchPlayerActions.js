import axios from 'axios'

export const FIND_FIRST_NAME = 'FIND_FIRST_NAME';
export const FIND_LAST_NAME = 'FIND_LAST-NAME';
export const CLEAR_INPUT = 'CLEAR_INPUT';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const FETCH_STATS = 'FETCH_STATS';
export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';


export const findFirstName = (firstName) => {
    return({type: FIND_FIRST_NAME, payload: firstName});
};

export const findLastName = (lastName) => {
    return({type: FIND_LAST_NAME, payload: lastName});
};

export const clearInput = () => {
    return({type: CLEAR_INPUT});
};


export const fetchPlayer = (name) => {
    return(dispatch => {
        dispatch({type: FETCH_START});

        axios.get(`https://www.balldontlie.io/api/v1/players/${Math.floor(Math.random()*20)}`)
            .then(res => {
                // console.log(res);
                dispatch({type: FETCH_SUCCESS, payload: res.data});
            })
            .catch(err => {
                dispatch({type: FETCH_ERROR, payload: err});
            })
    });
};

// export const fetchPlayerStats = (id) => {
//     return(dispatch => {
//         dispatch({type: FETCH_STATS});

//         axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`)
//             .then(res => {
//                 console.log(res.data.data[0]);
//                 dispatch({type: FETCH_STATS_SUCCESS, payload: res.data.data[0]});
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     });
// };