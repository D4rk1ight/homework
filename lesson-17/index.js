const number = +prompt("Введите число для проверки на чётность");

if (number % 2 === 0) {
  alert(`${number} это чётное число`);
} else {
  alert(`${number} это нечетное число`);
}

number % 2 === 0
  ? alert(`${number} это чётное число`)
  : alert(`${number} это нечетное число`);

// TASK 2 TERNARY OPERATOR

const age = +prompt("What's your age?");

let discount;

discount = age >= 18 && age <= 65 ? "20%" : age <= 18 ? "10%" : "30%";

alert(`You got a discount ${discount} off`);

// TASK 2 SWITCH CASE

// const age = +prompt(`How old are you?`);

// switch (true) {
//   case age < 18:
//     alert("You got a discount 10% off");
//     break;
//   case age <= 65:
//     alert("You got a discount 20% off");
//     break;
//   case age > 65:
//     alert("You got a discount 30% off");
//     break;
// }

// if (age < 18) {
//   alert("You got a discount 10% off");
// } else if (age <=65) {
//   alert("You got a discount 20% off");
// } else {
//   alert("You got a discount 30% off");
// }

// Task 3 username and password;

const userName = prompt(`Put you're username`);
const userPassword = prompt(`Put you're password`);

const role = userName;
const ADMIN = "admin";
const USER = "user";
const PASSWORD = "123456";

switch (role) {
  case ADMIN:
  case USER:
  case PASSWORD:
    alert("Доступ разрешен");
    break;
  default:
    alert("Доступ запрещен");
}

// Task 4 delivery calculator

function calculateDelivery() {
  const weight = +prompt("Введите вес посылки");
  const deliveryType = prompt(
    `Введите название тарифа: "Стандарт", "Экспресс" или "Премиум"`,
  );

  const BASE_DELIVERY = "Стандарт";
  const EXPRESS_DELIVERY = "Экспресс";
  const PREMIUM_DELIVERY = "Премиум";

  if (weight <= 0 || isNaN(weight)) {
    return alert(`Некорректный вес посылки`);
  } else {
    let baseCostDelivery;

    // if (weight < 1) {
    //   baseCostDelivery = 5;
    // } else if (weight <= 5) {
    //   baseCostDelivery = 10;
    // } else {
    //   baseCostDelivery = 15;
    // }

    baseCostDelivery = weight < 1 ? 5 : weight <= 5 ? 10 : 15;

    let deliveryRate;

    switch (deliveryType) {
      case BASE_DELIVERY:
        deliveryRate = 1;
        break;
      case EXPRESS_DELIVERY:
        deliveryRate = 1.5;
        break;
      case PREMIUM_DELIVERY:
        deliveryRate = 2;
        break;

      default:
        return alert("Некорректный тип доставки");
    }

    const totalCost = baseCostDelivery * deliveryRate;

    alert(`Итоговая стоимость доставки ${totalCost}$`);
  }
}

calculateDelivery();
// let baseCostDelivery = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
