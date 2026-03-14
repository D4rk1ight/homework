// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }

  console.log(i);
}

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.

const n = +prompt("Введите число для вычисления его факториала");

let result = 1;

for (let i = 1; i <= n; i++) {
  result *= i;
}

alert(result);

// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.

// Yellow "\u{1F7E8}"
// Black  "\u{2B1B}"

// let line = "";
const black = "\u{2B1B}";
const yellow = "\u{1F7E8}";

// for (let row = 0; row < 8; row++) {
//   let line = "";

//   for (let col = 0; col < 8; col++) {
//     line += (row + col) % 2 === 0 ? black : yellow;
//   }
//   console.log(line);
// }

for (let row = 0; row < 8; row++) {
  let line = " ";
  for (let col = 0; col < 8; col++) {
    if ((row + col) % 2 === 0) {
      line += black;
    } else {
      line += yellow;
    }
  }
  // line +='\n';
  console.log(line);
}

// console.log(line)
