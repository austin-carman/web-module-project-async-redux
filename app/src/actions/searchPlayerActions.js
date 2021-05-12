export const FIND_PLAYER = "FIND_PLAYER";
export const CLEAR_INPUT = 'CLEAR_INPUT';

export const findPlayer = (player) => {
    return({type: FIND_PLAYER, payload: player});
}

export const clearInput = () => {
    return({type: CLEAR_INPUT})
}

