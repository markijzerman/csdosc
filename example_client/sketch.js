var client;
var server;
var connect;
var x, y;

function setup() {
  createCanvas(640,480);
  background(255)

  connect = new Connect();

  connect.connectToServer(function() {
    client = new Client();
    client.startClient("127.0.0.1",8000);

    server = new Server();
    server.startServer(8005);
    server.getMessage(function(add,msg) {
      oscReceiver(add,msg);
    });  
  });
  

  x = 100;
  y = 100;
}

function draw() {
  background(255);
  ellipse(mouseX,mouseY,25);
}

function mouseMoved() {
  client.sendMessage("/x",mouseX);
  client.sendMessage("/y",mouseY);
}

function oscReceiver(add,msg) {
  console.log(add,msg);
}