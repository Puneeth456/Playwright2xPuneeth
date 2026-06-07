const user = {
    firstName: "Pramod",
    LastName: "Dutta",
    get fullName() {
        return this.firstName + this.LastName;
    },
    set fullName(value) {
        [this.firstName, this.LastName] = value.split("");
    }


}

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);




//Objects {}
//Class & Object
//This. it means the current value in the object
