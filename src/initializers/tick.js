const INTERVAL = 3000 // ms

const tick = (store) => {
    const { dispatch } = store;
    setInterval(() => {
        dispatch({type: 'TICK'})
    }, INTERVAL)
};

export default tick

/*
[1, 2, 4].reduce((a, b) => a + b, 0)

[1, 2, 4].reduce((acc, val) => acc + val, 0)

[1, 2, 4].reduce((acc, val) => acc + val)

[1, 2, 4].reduce((acc, val) => acc + val, false)

[1, 2, 4].reduce((acc, val) => acc + val, a)
[1, 2, 4].reduce((acc, val) => acc + val, 'a')
[1, 2, 4].reduce((acc, val) => acc + val, 0)
[1, 2, 4].reduce((acc, val) => acc + val, {})
const multBy2 = x => x + x
const sum = (acc, val) => acc + val
[1, 3, 5].map(multBy2).reduce(sum, 0)
const multBy = n => x => x * n
[1, 3, 5].map(multBy(2)).reduce(sum, 0)
[1, 3, 5].map(multBy(5)).reduce(sum, 0)*/
