// app/routes.js

// grab the nerd model
var Nerd = require('./models/nerd');

module.exports = function(app){
    // server routes
    
    // handle things like api calls
    // TODO apis get in here.
        
    app.get('*', function(req, res){
        res.sendFile('C:/Users/Scien/Desktop/hackathonAttendance/public/index.html');
    });
    
};