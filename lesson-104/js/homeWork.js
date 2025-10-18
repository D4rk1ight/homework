const aboutMe = {
    name: 'Ivan',
    age: 25,
    hasJob: true,
    sayHi() {
        console.log(`Hello ${this.name}`)
    }
}

aboutMe.sayHi()


const users = [ 
    {
        name: 'Tom',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Jhon',
        age: 43,
        isAdmin: true
    },
    {
        name: 'Peter',
        age: 13,
        isAdmin: false
    },
    {
        name: 'Oleg',
        age: 47,
        isAdmin: false
    }
];

let defaultUser = null; 

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        defaultUser += 1;
    } 
}

console.log(defaultUser);