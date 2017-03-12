var Primus = require('primus');
var primusSession = require('./session');
module.exports = function(server, store, cookies){
    console.log('socket file')
    var options = {
        parser: 'JSON',
        //transformer: 'engine.io' || 'websockets',
    }

    var primus = new Primus(server, { options });

    // var fs = require('fs')
    //   , UglifyJS = require('uglify-js');

    var pathJs = __dirname + '/public/js/';
    console.log(pathJs)
    primus.save(pathJs + 'primus.js', function save(err) {
        if(!err){
            // var result = UglifyJS.minify([pathJs  +  'primus.js']);

            // fs.writeFile(pathJs + 'primus-client.min.js', result.code, function(err) {
            //     if(err) {
            //         console.log(err);
            //     } else {
            //         console.log('File was successfully saved. Path: '+ pathJs);
            //     }
            // });

            console.log('File was successfully saved. Path: '+ pathJs);
        }
    });

    // middlewares
    primus.use('cookies', cookies);
    primus.use('session', primusSession, { store: store });

    primus.on('connection', function connection(spark) {
        console.log('new connection' , spark.request.session);

        spark.write(JSON.stringify(spark.request.session, null, '  '));
    });


}