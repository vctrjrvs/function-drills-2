function decode(word) {
    for (let i = 0; i < word.length; i++) {
           if (word[0] === "a") {
               return word[1];
           }
           if (word[0] === "b") {
               return word[2];
           }
           if (word[0] === "c") {
               return word[3];
           }
           if (word[0] === "d") {
               return word[4];
           }
           if (word[0] !== "a" || "b" || "c" || "d") {
               return " "
           }
       }
     console.log(decode('craft', 'block', 'argon', 'meter', 'bells', 'brown', 'croon', 'droop'))
   } 
   