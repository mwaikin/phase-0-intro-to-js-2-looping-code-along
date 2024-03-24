// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards( names, gift ) {
  return names.map( name => `Thank you, ${name}, for the wonderful ${gift} gift!` );
}
function countDown(number){
  while (number >= 0){
    console.log(number);
    number--;
}
}
countDown(number);
