const user = { name1: "John", age: 31, city: "NYC" };


//Basic Deconstruction

const { name1, age } = user;
console.log(name1);
console.log(age);


//Rename variable
// const { name1: Username, age: UserAge } = user;
// console.log(Username);
// console.log(UserAge);

///Basic Deconstruction
// const { age } = user;


//Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);


const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "nyc"
        }

    }


};


const { user: { address: { city } } } = data;
console.log(user);
console.log(data.user);
console.log(data.user.address, city);














