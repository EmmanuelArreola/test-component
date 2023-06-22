const objects = require('./process.js');

// var message = await objects.showTimeAndMessage("Testing", "More testing", true);

function start() {
    return objects.showTimeAndMessage("Testing", "More testing", true);
  }

  (async() => {
    console.log('before start');
  
    console.log(await start());
    
    console.log('after start');
  })();

// console.log("Hola mundo" + message);