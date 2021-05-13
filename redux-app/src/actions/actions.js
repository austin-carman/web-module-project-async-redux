import axios from 'axios';

export const FETCH_START = 'FETCH_START'; 
export const FETCH_SUCCESS = 'FETCH_SUCCESS'; 
export const FETCH_FAIL = 'FETCH_FAIL'; 


export const fetchDogs = (userInput) => {
    return(dispatch => {
        // dispatch({type: FETCH_START});
        // const breed = userInput.toLowerCase();
        axios.get(`https://dog.ceo/api/breed/${userInput}/images/random/3`)
            .then(res => {
                dispatch({type: FETCH_SUCCESS, payload: res.data.message});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: FETCH_FAIL, payload: 'Unable to find dog breed'})
            })
    })
}


