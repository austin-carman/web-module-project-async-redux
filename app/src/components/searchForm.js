import React from 'react';
import { connect } from 'react-redux';
import { findFirstName, findLastName, clearInput, fetchPlayer } from '../actions/searchPlayerActions';


const SearchPlayer = (props) => {


    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === 'playerFirst') {
            props.findFirstName(value);
        } else if(name === 'playerLast') {
            props.findLastName(value);
        } else {
            return null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchPlayer(props.playerFirstName, props.playerLastName); 
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
                        name='playerFirst'
                        value={props.playerFirstName} 
                        onChange={handleChange}
                        placeholder='First Name'
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='playerLast'
                        value={props.playerLastName} 
                        onChange={handleChange}
                        placeholder='Last Name'
                    />
                </label>
                <button onClick={handleSubmit}>Search Random Player</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        playerFirstName: state.playerFirstName,
        playerLastName: state.playerLastName
        // error: state.error,
        // isFetching: state.isFetching
    };
};


export default connect(mapStateToProps, {findFirstName, findLastName, clearInput, fetchPlayer})(SearchPlayer);