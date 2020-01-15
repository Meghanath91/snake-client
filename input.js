/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let link;
 const setupInput = function(conn) {
   const stdin = process.stdin;
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
   stdin.on('data',(data)=>{
     handleInput(data, conn);
   })

   return stdin;
 };

 //set up Handling CTRL+C
 const handleInput = function(move, conn) {
   if ( move === '\u0003') {
     process.exit();
   }
   console.log(move)
   return move;
 };

 module.exports = {
   setupInput,
   handleInput
 };
