const net = require('net');
const { IP,PORT} = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
    
  });

  //
  conn.on('connect', () => {
    console.log('connected successfully');
    conn.write('Name: MEG');
    // conn.write('Move: up');
    
  });
  

  // client.js
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {
  connect };