const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
    
  });

  //
  conn.on('connect', () => {
    console.log('connected successfully');
    conn.write('Name: MEG');
    conn.write('Move: up');
    // conn.write('Move: down ');
    
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