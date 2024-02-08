function checkName(name) {
    if (typeof name !== "string") {
      return "Invalid input please Recheck Your Provided name";}
    let LowerCase = name.toLocaleLowerCase();
    const LastLetter = LowerCase.slice(-1);
  
    const validChars = ["a", "y", "i", "e", "o", "u", "w"];
  
    if (validChars.includes(LastLetter)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }