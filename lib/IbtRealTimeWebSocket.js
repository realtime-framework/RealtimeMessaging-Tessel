var WebSocket = require('nodejs-websocket');

function IbtRealTimeWebSocket(url){
    this.socket=null;
    this.url= url?url:null;
};

IbtRealTimeWebSocket.prototype.connection = function connection(connect){
    if(this.socket && (this.socket.readyState==WebSocket.OPEN || this.socket.readyState==WebSocket.CONNECTING )){
        return this.socket;
    }else if(this.url){
        this.socket = WebSocket.connect(this.url, connect);
        return this.socket;
    }
}

module.exports = IbtRealTimeWebSocket;
