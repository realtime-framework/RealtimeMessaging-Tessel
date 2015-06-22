## The Realtime Cloud Messaging SDK for Tessel
Part of the [The Realtime® Framework](http://framework.realtime.co), Realtime Cloud Messaging (aka ORTC) is a secure, fast and highly scalable cloud-hosted Pub/Sub real-time message broker for web and mobile apps.

When you need to communicate in real-time with your Tessel devices Realtime Cloud Messaging is the reliable, easy, unbelievably fast, “works everywhere” solution.

## The Realtime Tessel sample app
Before running this sample install the Realtime Cloud Messaging SDK for Tessel using the following commands:


    cd sample
    npm install realtime-tessel
    

To execute the blink sample in your Tessel run the following commands:


    tessel run blink.js


This sample will subscribe the Realtime channel `tessel` and when any message is received your Tessel leds will toggle. 

You might want to use this sample in conjunction with the JavaScript sample (or [http://console.realtime.co](http://console.realtime.co)) and send messages to the channel `tessel`. You should see the Tessel leds toggle when messages are received.

> NOTE: For simplicity these samples assume you're using a Realtime® Framework developers' application key with the authentication service disabled (every connection will have permission to publish and subscribe to any channel). For security guidelines please refer to the [Security Guide](http://messaging-public.realtime.co/documentation/starting-guide/security.html). 
> 
> **Don't forget to replace `YOUR_APPLICATION_KEY` and `YOUR_APPLICATION_PRIVATE_KEY` with your own application key. If you don't already own a free Realtime® Framework application key, [get one now](https://accounts.realtime.co/signup/).**

## Documentation
The SDK API is the same as the Node.js SDK API. Full reference documentation can be found [here](http://messaging-public.realtime.co/documentation/nodejs/2.1.0/OrtcClient.html).

The complete Realtime® Messaging reference documentation is available [here](http://framework.realtime.co/messaging/#documentation)