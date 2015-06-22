// Import the interface to Tessel hardware
var tessel = require('tessel');
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

var ortcNodeclient = require('realtime-tessel').Messaging;
 
// Create Messaging client
var ortcClient = new ortcNodeclient();
 
// Set Messaging client properties
ortcClient.setClusterUrl('http://ortc-developers.realtime.co/server/2.1/');
 
ortcClient.onConnected = function (ortc) {
    // Messaging client is connected
    // Subscribe channel tessel to receive real-time messages
    ortcClient.subscribe('tessel', true,
        function (ortc, channel, message) {
            console.log('Receive a new message: ' + message);
            led1.toggle();
            led2.toggle();
    });
};
 
ortcClient.onSubscribed = function (ortc, channel) {
    console.log('subscribed channel: ' + channel);
        
    // Sending HelloWorld message
    ortcClient.send(channel, 'Hello World');
};

ortcClient.onException = function (ortc, exception) {
    console.log('exception: ' + exception);
};
 
ortcClient.connect('YOUR_APPLICATION_KEY', 'myAuthenticationToken');