//Template Literals

let firstName = "Prammod";
let fullname = `Hi ${firstName} Dutta`;
console.log(fullname);


let env = "staging";
env = "prod";
const userId = 12345;
const apiURL = 'https://api-$(env).tekion.com/users/$(userId)';
console.log(apiURL);



