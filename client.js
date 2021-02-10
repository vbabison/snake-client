const { IP, PORT } = require('./constants');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('data', (text) => {
    console.log(text);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: BV");
    conn.write("Say: Go long");
    /*
    conn.write("Move: up");
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
    setInterval(() => {
      conn.write("Move: left");
    }, 50);
    */
  });
  return conn;
};

module.exports = {connect}