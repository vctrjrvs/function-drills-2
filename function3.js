function decode(word) {
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
               return (" ");
           }
       }
    
function crackTheCode(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(decode(list[i]));
    } 
    return result;
}

let list = ['craft', 'block', 'argon', 'meter', 'bells', 'brown', 'croon', 'droop'];

console.log(crackTheCode(list));  