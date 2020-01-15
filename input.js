/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
   
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',(data)=>{
    handleInput(data, conn);
  });

  return stdin;
};

//set up Handling CTRL+C
const handleInput = function(move, conn) {
  if (move === '\u0003') {
    process.exit();
  } else if (move === 'w') {
    conn.write('Move: up');
  } else if (move === 'a') {
    conn.write('Move: left');
  } else if (move === 's') {
    conn.write('Move: down');
  } else if (move === 'd') {
    conn.write('Move: right');
  }
  console.log(move);
  return move;
};

module.exports = {
  setupInput
};
