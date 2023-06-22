const {showTimeAndMessage} = require('firstprojecteap');
const {constants} = require('utils-nxg-cg');
const {emits} = constants;


/**
 * Method for transform excel to json
 * @param msg
 * @param cfg
 * @param snapshot
 * @returns {Promise<void>}
 */

module.exports.process = async function timeAndMessage(msg, cfg) {
    try {
        const result = await showTimeAndMessage(msg, cfg);
        let data = {
            content: result
        };
        this.emit(emits.data, {data});
        this.emit(emits.end);
        console.log(data);
    } catch (e) {
        this.emit('error', e);
    }
};