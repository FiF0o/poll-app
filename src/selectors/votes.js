/**
 * Created by jonlazarini on 21/06/17.
 */
const getAllVotes = (state) =>
    state.allIds.map(v => state.byId[v]);

export const getVotes = (state) => getAllVotes(state);
