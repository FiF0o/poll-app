const date = jest.mock('date');

function __createDate() {
    const constantDate = new Date('2017-06-13T04:41:20'); 
    /*eslint no-global-assign:off*/
    Date = class extends Date {
      constructor() {
        return jest.fn(() => constantDate);
      }
    }
}

date.__createDate = __createDate;

module.exports = date;