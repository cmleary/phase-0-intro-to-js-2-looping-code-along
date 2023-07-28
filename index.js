let names = [];
let day = "";
let messages = [];
function writeCards(names, day) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${day} gift!`);
    
  }

  return messages;
}

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number --;
    }
  }