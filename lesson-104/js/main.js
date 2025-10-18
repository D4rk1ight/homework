// console.log('Привет! Это моя первая мини-программа xD \n Я сравниваю два числа.')

// let  firstNumber = prompt('Введи первое число'); 
// let  secondNumber = prompt('Введи второе число'); 


// let result = null; 
// let difference = null; 

// if (firstNumber > secondNumber) {
//     difference = firstNumber - secondNumber;
//     console.log(`Перво число сило ${firstNumber} больше второго ${secondNumber} на ${difference}`);
// }
// else if (secondNumber > firstNumber) {
//     difference = secondNumber - firstNumber;
//     console.log(`Второе число сило ${secondNumber} больше первого ${firstNumber} на ${difference}`);
// }
// else  {
//     result = firstNumber + secondNumber;
//     console.log(`Оба числа одинаковые и в сумме дают ${result}`);
// }  


// const user = {
//     nickmame: 'Alex',
//     isAdmin: true,
// }

// user.nickmame === 'Alex' ? console.log(`${user.nickmame} is admin`) : console.log(`${user.nickmame} isn't admin`)

// let i = 15; 

// while ( i > 0) {
//     console.log(i - 1)
//     i--; 
// }


// for (let i= 1; i <= 5; i++) {
//     console.log(i)
// }

// let i = 8;

// do {
//     console.log(i)
//     i++
// } while (i <= 12)


// for(let i = 1; i < 10; i++) {
//     console.log(`lap ${i} is done, ${10 - i} to go`)
// }


// class PC {
//     constructor(GPU, CPU, RAM) {
//         this.GPU = GPU;
//         this.CPU = CPU;
//         this.RAM = RAM
//     }
//     increaseRam(newSize) {
//         this.RAM = newSize;
//     }
// }

// const myPc1 = new PC('4070rtx', 'Ryzen 5600x', '16gb');

// console.log(myPc1);

// myPc1.increaseRam('32gb');

// console.log(myPc1);


// const array = [1, 2 , 3 , 4 , 5]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + 1 )
// }



// function calcular(num1:number, operand:String, num2:Number, ) {
//     if (operand === '+') {
//         console.log(num1 + num2);
//     }
// }


// function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// const result = sum(3, 5);

// console.log(result);
// console.log(sum(-3, -5));


// const user = ['Max', 'Ted', 'Alex', 'Anna'];

// function checkArrayItem(array, item) {

//     for(let i = 0; i < user.length; i++) {
//         if(array[i] === item) {
//             return `There is a copy ${item} in array`
//         }
//     }
//     return `There is no copy item in array`
// }

// const result = checkArrayItem(user, 'Ana');
// console.log(result); 


const greeting = (name) => {
    return `Hello ${name}`
}

// console.log(greeting('Jojoba'));


const numbers = [1 , 4, 6, -3, 12, 2, 18];

const moreThenTen = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return array[i];
        }
        
    }
}

// console.log(moreThenTen(numbers))


const calculator = (num1, operand, num2 ) => {
    if (operand === 'plus') {
        return num1 + num2;
    } 
        else if (operand === 'minus') {
        return num1 - num2;
    } 
        else if (operand === 'divide') {
        return num1 / num2;
    } 
        else if (operand === 'multiply') {
        return num1 * num2;
    } 
    
    //     else  {
    //     return num1 * num2;
    // } 
    
}

// console.log(calculator(3, 'multiply', 7));

const users = {
    Jhon: {
        age: 22, 
        name: 'Jhon',
        isAdmin: false 
    },
    Max: {
        age: 32, 
        name: 'Max',
        isAdmin: true,
        greeting() {
            return `Hello ${this.name}`
        }
    }
}

// console.log(users.Max.greeting())

const newUsers = [
    {
        name: 'Alex',
        age: 22, 
        isAdmin: false
    },
    {
        name: 'Tom',
        age: 45, 
        isAdmin: true
    }
]

newUsers.push(
    {
        name: 'Ivan',
        age: 55, 
        isAdmin: false
    }
);

for(let i = 0; i < newUsers.length; i++) {
    console.log(newUsers[i])
}


const foo = 'Abobus At Status';
// console.log(foo.trim(''))


