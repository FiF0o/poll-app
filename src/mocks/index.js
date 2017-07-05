/**
 * Created by jonlazarini on 04/07/17.
 */
import { initialState as data } from '../initialState';


const mock = [
    {
        author: "username 1",
        description: "Marv Luvvhini est un peu un vier.",
        id: "poll1",
        name: "poll name",
        timeStamp: 1499169392257,
        uid: "user1",
        voters: [
            {
                uid: "user2",
                voteId: "vote1"
            },
            {
                uid: "user3",
                voteId: "vote2"
            }
        ]
    },
    {
        author: "username 1",
        description: "Marv Luvvhini est un peu un vier.",
        id: "poll1",
        name: "poll name",
        timeStamp: 1499169392257,
        uid: "user1",
        voters: [
            {
                uid: "user2",
                voteId: "vote1"
            },
            {
                uid: "user3",
                voteId: "vote2"
            }
        ]
    }
];


// export const getData = () => Promise.resolve(data);
export const getData = () => new Promise((resolve, reject) => resolve(mock));
getData()
    .then(data => console.log(data));

export const getSources = (promise1, promise2) => Promise.all([promise1, promise2]);

getSources(getData(), Promise.resolve('foo'))
    // .then(([mock, data]) => [mock, data]) // unmerge
    .then((values) => console.log(values));