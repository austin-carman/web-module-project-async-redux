import React from 'react';
import { connect } from 'react-redux';
// import {fetchPlayerStats} from '../actions/searchPlayerActions';


const PlayerCard = (props) => {

    console.log('player Card: ', props.playerStats);

    return(
        <div>
            <h2>Random Players</h2>
            {props.playerStats.pts ? <h3>{props.playerFirstName}</h3> : null}
            {props.playerStats.pts ? <p>PPG: {props.playerStats.pts}</p> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        playerStats: state.playerStats,
        playerFirstName: state.playerFirstName,
        playerLastName: state.playerLastName
    }
}

export default connect(mapStateToProps)(PlayerCard);
