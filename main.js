// HOMEWORK-6

// // Array1
function getLevel2(n) {
  let arr = [];
  for (i = 2; i <= 2 ** n; i = i * 2) {
    arr.push(i);
  }
  return arr;
}
console.log(getLevel2(5));

// Array2
// let a = +prompt(`array ning 1-elementini kiriting`);
// let b = +prompt(`array ning 2-elementini kiriting`);
// let n = +prompt(`array ning elementlari sonini kiriting`);
// function array(n) {
//   let arr = [2, 3];
//   for (i = 2; i < n; i++) {
//     var summ = a + b;
//     summ += summ;
//     arr.push(summ);
//   }
//   return (arr = [i]);
// }
// array(n);

// // Array3
// function getLevel2(n) {
//   let arr = [];
//   for (let i = n - 1; i >= 0; i--) {
//     arr.push(i);
//     console.log((arr = [i]));
//   }
//   console.log((arr = [i]));
//   return arr;
// }
// getLevel2(4);

// // Array4
// let arr = [4, 9, 7, 8, 6, 5];
// let toq = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     toq++;
//     arr.push(i);
//   }
// }
// console.log(`arrayning toq elementlari soni: ${toq}`);

// // // // console.log(`toq elementlardan tashkil topgan array: ${arr}`);

// // Array5
// let inputArray = [4, 9, 7, 8, 6, 5];
// function printArr(arr) {
//   let evens = [];
//   let odds = [];
//   for (let i = 0; i < arr.length; i = i + 2) {
//     evens.push(i);
//   }
//   for (let i = arr.length - 1; i >= 0; i = i - 2) {
//     odds.push(i);
//   }
//   let full = evens.concat(odds);
//   console.log(`hosil bo'lgan array: `, full);
// }
// printArr(inputArray);

// Array6
// Array7

// Array10
// let n = 9;
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let arr1 = [i];
//   for (let j = 1; j > 0; j--) {}
//   let arr2 = [j];
//   let array1 = arr1.fill(arr2[n - j], 1);
//   console.log(array1);
// }
// function func6(n) {
//   let arr1 = [];
//   for (var i = 0; i <= n; i = i + 2) {
//     console.log(`juft sonlar: `, (arr1 = [i]));
//   }
//   return (arr1 = [i]);
// }
// func6(11);
// function func6(n) {
//   const arr = [1, 2, 3, 4, 5, 6];
//   for (let i = 1; i < arr.length; i += 2) {
//     console.log(`juft sonlar ${arr[i]}`);
//   }
// }
// console.log(func6());

// // Array12
// let inputArray = [0, 1, "", "Maqsadjon", null, undefined, true, false, 42, NaN];
// function checkArr(arr) {
//   let truthy = [];
//   let falsy = [];
//   for (let el of arr) {
//     if (el) {
//       truthy.push(el);
//     } else {
//       falsy.push(el);
//     }
//   }

//   return [truthy, falsy];
// }
// let result = checkArr(inputArray);
// console.log("Truthy arr: ", result[0]);
// console.log("Falsy arr: ", result[1]);

// Array13
// let inputArray = [2, 3, 5, 4, 1, 9];
// function getOddMin(arr) {
//   let smallest = Infinity;
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }
// let result = getOddMin(inputArray);
// console.log(result);

// Array15
// let inputArray = [1, 3, 7, 1, 2, 6, 4, 8];
// function maxIndex(arr) {
//   let max = -1;

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       max = i;
//     }
//   }

//   return max;
// }

// let result = maxIndex(inputArray);

// console.log(result);
