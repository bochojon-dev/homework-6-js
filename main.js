// HOMEWORK-6

// // Array1
// function getLevel2(n) {
//   let arr = [];
//   for (i = 2; i <= 2 ** n; i = i * 2) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(getLevel2(5));

// Array2
// let a = +prompt(`array ning 1-elementini kiriting`);
// let b = +prompt(`array ning 2-elementini kiriting`);
// let n = +prompt(`array ning elementlari sonini kiriting`);
// let summ = a + b;
// function array(n) {
//   let arr = [];
//   for (i = 2; i < n; i++) {
//     summ += summ;
//     arr[i] = summ;
//     // console.log(arr[i]);
//   }
// }
// console.log(summ);
// console.log(array(5));

// Array10
let n = 9;
let arr = [];
for (let i = 1; i <= n; i++) {
  let arr1 = [i];
  for (let j = 1; j > 0; j--) {}
  let arr2 = [j];
  let array1 = arr1.fill(arr2[n - j], 1);
  console.log(array1);
}
