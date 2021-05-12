import React from 'react';
import { connect } from 'react-redux';

const PlayerCard = (props) => {

    return(
        <div>
            <h2>Player Stats</h2>
            <div>
                <span>PPG: {props.pts}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        pts: state.playerStats.pts
    }
}

export default connect(mapStateToProps)(PlayerCard);