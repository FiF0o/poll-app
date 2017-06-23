/**
 * Created by jonlazarini on 20/06/17.
 */

// currying
const partial = (fn, ...args) => (...restArgs) => fn.apply(this, args.concat(restArgs));
const not = (a, b) => a !== b;
export const deleteByItem = (arr, item) => arr.filter(partial(not, item));
