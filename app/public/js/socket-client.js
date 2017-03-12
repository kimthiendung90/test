(function () {

    var session = document.getElementById('session')

    var primus = new Primus('http://localhost:8888/');

    primus.on('open', function (data) {
        status.textContent = 'connected';
    });

    primus.on('data', function (data) {
          session.textContent = data;
        });

})();