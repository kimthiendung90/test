(function () {
    var primus = new Primus('http://localhost:8888/');

    primus.on('open', function (data) {
        console.log('connected');
    });

    primus.on('data', function (data) {
        console.log(data)
    });

})();