import React from 'react';
import { connect } from 'react-redux';


const PlayerCard = (props) => {

    // const player = props.players.find( ({first_name}) => first_name === props.playerFirstName);
    // console.log('player: ', player);  --- undefined ---
    

    return(
        <div>
            <h2>Random Players</h2>
            <p>{props.players.first_name} {props.players.last_name}</p>
            <p>Team: {props.players.team.city}</p>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        players: state.players,
        playerFirstName: state.playerFirstName,
        playerLastName: state.playerLastName
    }
}

export default connect(mapStateToProps)(PlayerCard);
