util = require('util');
var tri = '';
for(var i = 0; i < 5; i++ ){
   tri += "*";
   s = util.format("%s$10s", tri);
   console.log(s);
}