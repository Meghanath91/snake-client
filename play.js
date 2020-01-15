// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');
const { handleInput } = require('./input');
console.log('Connecting ...');
const conn = connect();
setupInput(conn);


