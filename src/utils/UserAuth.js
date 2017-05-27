/**
 * Created by jonlazarini on 04/05/17.
 */

export const isUserLogged = (user) => user.uid !== null;

export const isTheCurrentUser = (user, id) => {
    return user.uid === id
};
