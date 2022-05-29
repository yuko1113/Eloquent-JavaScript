'use strict'

console.log('Looping a triangle');

for (let i = '#'; i.length < 8; i += '#') {
    console.log(i);
}

console.log('FizzBuzz');
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

console.log('Chessboard');
let string = '';
for (let row = 1; row < 9; row++) {
    for (let col = 1; col < 9; col++) {
        if (row % 2 !== 0 && col % 2 !== 0 
            || row % 2 === 0 && col % 2 === 0) {
            string += ' ';
        } else if (row % 2 !== 0 && col % 2 === 0
            || row % 2 === 0 && col % 2 !== 0) {
            string += '#';
        }  
    }
    string += '\n';
}

console.log(string);

console.log('Minimum');
function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

console.log('recursion');
function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1 || num === -1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??script.js:51 Uncaught RangeError: Maximum call stack size exceeded

console.log('bean counting');

function countBs(str) {
    let count = 0;
    for (const s of str) {
        if (s === 'B') count += 1;
    }
    return count;
}

function countChar(str, char) {
    let count = 0;
    for (const s of str) {
        if (s === char) count += 1;
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



function loop(value, testFunc, updateFunc, bodyFunc) {
    for (let i = value; testFunc(i); i = updateFunc(i)) {
      bodyFunc(i);
    }
  }
  
  
  //test
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1
  
  loop(1, n => n <= 10, n => n * 2, console.log);
  // → 1
  // → 2
  // → 4
  // → 8
  
  
  
  //answer recursion
  function loop(value, test, update, body) {
    if (test(value)) {
      body(value);   
      loop(update(value), test, update, body);
    }
  }
  
  //answer use loop
  function loop(value, test, update, body) {
    for (value; test(value); value = update(value)) {
      body(value); 
    }
  }
  


//お馴染みの形だとこんな感じ
// function loop(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// }

//アロー関数をお馴染みの形にしてみると
function test(n) {
return n > 0;
}
//アロー関数式を変数に代入
test = n => n > 0;
//関数呼び出しできるようになる
test(3);

//testとupdateは、nが引数で返り値を持つアロー関数

//point
// ・コールバック関数の扱い
// ・アロー関数
// ・ループ処理の順序　https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration

  
// ・再帰処理　https://ja.javascript.info/recursion
  
  
  function every(array, test) {
    for (let i = 0; i < array.length; i++) {
      if (array.length === 0) {
        return true;
      } 
      else if (test(array[i]) === false) {
        return false;
      } 
    } 
    return true;
  }
  
  function every(array, test) {
    return !array.some(element => !test(element));
  }
  
  // a && b equals !(!a || !b)
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
  
  
  // Version 1 of every() written using Loops
  
  function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
  }
  