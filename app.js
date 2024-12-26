// Recur1

// function factorial (n){
//     if (n===0){
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5));

// console.log(factorial(7));
// console.log(factorial(9));






// Recur4

// function fibonacciRecursive(n) {
//     if (n <= 1) return n;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciRecursive(6)); 






// recur10

//  function sumofDigits(K){
//     if(K===0) return 0;

//     return K % 10 + sumofDigits(Math.floor(K/10));
//  }

// let son1 = 123;
// let son2 = 456;
// let son3 = 789;

// console.log(sumofDigits(son1));
// console.log(sumofDigits(son2));
// console.log(sumofDigits(son3));


























// Vazifaga aloqasi yuq
// Closure 

// function count(){
//     let a=0;

//     return function(){
//        return a++;

//     }
// }

// const counter = count();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// function tashFunc(tashQiymat){
//     return function ichFunc(ichQiymat){
//         console.log(tashQiymat);
//         console.log(ichQiymat);
//     }
// }

// tashFunc("tashQiymat")("ichQiymat")






// function listener(elem, text){

// let a=10;

//     return elem.addEventListener("click", () => {
//   console.log(text);
//    console.log(a);
//   return a++;
//     })

// }

// listener(document.getElementById('btn'), "Hello")
// listener(document.getElementById('edit'), "edit btn")







// function NumberSum(number){
//     let i=0;

//     while(0<number){
//         i+=number%10;
//         number=Math.floor(number/10)
//     }
//     return i;
// }

// let k=123;

// console.log(NumberSum(k));




// function fibonacci(n){
//     if(n===0 || n===1){
//  return n;
//     }

//     return fibonacci(n-1) + fibonacci(n-2)

// }

// console.log(fibonacci(7));  
