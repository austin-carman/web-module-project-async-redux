import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findPlayer, clearInput } from '../actions/searchPlayerActions';


const SearchPlayer = (props) => {


    const handleChange = (e) => {
        props.findPlayer(e.target.value); // action to update playerSearched state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // action to axios call
        props.clearInput();
    };

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
        playerSearched: state.playerSearched
    };
};


export default connect(mapStateToProps, {findPlayer, clearInput})(SearchPlayer);