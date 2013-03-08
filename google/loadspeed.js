var page = require('webpage').create(),
    system = require('system'),
    t, address;

t = Date.now();
address = "http://www.google.com";
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    } else {
        t = Date.now() - t;
        console.log('Loading time ' + t + ' msec');
    }
    phantom.exit();
});
