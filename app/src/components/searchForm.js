import React from 'react';
import { connect } from 'react-redux';
import { findPlayer, clearInput, fetchPlayer } from '../actions/searchPlayerActions';


const SearchPlayer = (props) => {


    const handleChange = (e) => {
        props.findPlayer(e.target.value); // action to update playerSearched state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchPlayer(); // action to axios call
        props.clearInput();
    };

    // if(props.error) {
    //     return <h2>We got an error: {props.error}</h2>
    // } 

    // if(props.isFetching) {
    //     return <h2>Fetching player stats</h2>
    // }


    return(
        <div>
            <h2>Search Player</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text'
                        name='player'
                        value={props.playerSearched} // playerSearched
                        onChange={handleChange}
                    />
                </label>
                <button>Search</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        playerSearched: state.playerSearched,
        // error: state.error,
        // isFetching: state.isFetching
    };
};


export default connect(mapStateToProps, {findPlayer, clearInput, fetchPlayer})(SearchPlayer);