/**
 * Created by jonlazarini on 30/04/17.
 */
import { auth, database } from '../database/firebase';

const promisify = (callback) => {
    return new Promise((resolve, reject) => {
        callback((err, data) => {
            if(err) {
                console.error(err);
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};

export const getPolls = () => {

};
