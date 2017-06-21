/**
 * Created by jonlazarini on 21/06/17.
 */
const getAllUsers = (state) => state.allIds.map(u => state.byId[u]);

export const getUsers = (state) => getAllUsers(state);
