var moment = require('moment');

console.log(moment().format());

//number of seconds sice 1970
console.log(moment().unix());
 timestamp =1517563605;
currentmoment =moment.unix(timestamp);
console.log(currentmoment.format('MMMM Do, YYYY @ hh:mm A'));
