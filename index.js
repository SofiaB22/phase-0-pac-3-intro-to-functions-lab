function shout(string) {
  // todo
} 
  
  function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO'.toUpperCase());
}

function logWhisper(string) {
  console.log('hello'.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string === "Let\'s have dinner together!") {
      return "I would love to!"
  }

  if (string === string.toLowerCase()) {
      return "I can\'t hear you!";
  }
  else if (string === string.toUpperCase()) {
      return "YES INDEED!"
  }
}

