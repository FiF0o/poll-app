/**
 * Created by jonlazarini on 04/05/17.
 */

export const isUserLogged = (user) => {
    return !user || user.isAnonymous ? false : true
};

export const isTheCurrentUser = (user, id) => {
    return user.uid === id
}