//  const time = require('time');
const {constants, log, helpers} = require('utils-nxg-cg');
const {msgToShare} = require('./objects');

/**
 * Method for process the data user and execute query single or batch by transactions
 * @param msg
 * @param cfg
 * @param test
 * @returns {Promise<array|object>}
 */

const showTimeAndMessage = async (msg = {}, cfg = {}, test = false) => {
    try {
        const {data} = msg;
        let properties = {...msgToShare};
        var now = new Date();
        console.log("Si entra aquí");
        return now.toString()  + "The message is: " + properties.content;

    } catch (e){
        log.error(e);
        throw Error(e);
    }
};

module.exports = {showTimeAndMessage};