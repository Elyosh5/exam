// let programmer = {
//   name: "Arthur",
//   surname: "Morgan",
//   age: 18,
//   prog_language: "JavaScript",
// };
// let { name, surname, age, prog_language } = programmer;
// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(prog_language);

// let num = prompt("Введите первое число:");
// let num2 = prompt("Введите второе число");
// let num3 = +num + +num2;
// if (num3 > 10 && num3 < 20) {
//   console.log(num3 * 5);
// } else if (num3 > 20 && num < 50) {
//   console.log(num3 / 3);
// } else {
//   console.log(num3 + 10);
// }
// let newNum = "";
// for (let i = 1; i <= 4; i++) {
//   newNum += i;
//   console.log(newNum);
// }

//! done
// let sumAge = 0;
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42,
// };
// for (let i in users) {
//   sumAge += users[i];
// }
// console.log(sumAge);

// function removeElem(arr, element) {}
// removeElem([2, "hello", true, "world", 5, "js"], "world");

// let arr = [];
// function palindrom(word) {
//   arr.push(word);
//   let arr2 = arr.reverse();
//   console.log(arr);
//   console.log(arr2);

//   if (arr === arr.reverse()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// console.log(palindrom("казак"));

//!done
// let task8 = ["John", "Jack", "Arthur", "Dutch", "Micah", "Morgan"];
// let filtered = task8.filter((el) => el.length > 5);
// console.log(filtered);

// let task9 = [10, 25, 25, 15, 5, 10];
// task9.forEach((el) => {
//   alert(el + el);
// });

// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// for (let i of task5) {
// }
//! done
// let nums = [8, 1, 2, 2, 3];
// let newNum = nums.map((item) => nums.filter((el) => el < item).length);
// console.log(newNum);

let a = 0;
let b = 1;
let c = [a, b];
c.reverse();
console.log(c);

// console.log(a, b);
//! done
// let task13 = {
//   size: { width: 100, height: 200 },
//   items: ["Cake", "Donut"],
//   extra: true,
// };
// let newObj = { ...task13 };
// let { size, items, extra } = newObj;
// let [...item] = items;

// console.log(size, item, extra);
//! done
// function toCamelCase(word) {
//   let newWord = "";
//   for (let i of word) {
//     if (i !== " ") {
//       newWord += i;
//     }
//   }
//   console.log(newWord);
// }
// toCamelCase("hello         world");
//! done
// function task16(odd) {
//   let oddNum = [];
//   for (let i of odd) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       oddNum.push(i);
//     }
//   }
//   console.log(oddNum);
// }
// task16([10, 5, 2, 5, 78, 9, 6]);
