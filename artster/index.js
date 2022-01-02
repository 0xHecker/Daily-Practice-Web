const figlet = require("figlet");
const colors = require('colors');

figlet('Sai Shanmukh', function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    console.log(data.green);
})