const {log} = require('utils-nxg-cg');

module.exports.process = async function run(msg, cfg, snapshot){
    console.log('Incoming msg is %s', JSON.stringify(msg));
    await this.emit('end');
    console.log('Execution finished');
};