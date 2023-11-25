// function myFun(name) {
//     console.log(`Hello ${name}`)
//     console.log('myFun: ', this)
// }
// myFun('anant')

// const res = function (name) {
//     console.log(`Hello ${name}`)
//     console.log('res: ', this)
// }
// res('anan')

// const fun = () => {
//     console.log('fun: ', this)
    
// }
// fun()

// const fun = (n1, n2) => {
//     return n1+n2;
// }
// console.log(fun(1, 2))

// const fun = (n1, n2) => n1+n2
// console.log(fun(1,5))

// const fun = (n1, n2) => (n1+n2)
// console.log(fun(2,5))

// To return an object we must have to use paranthesis operators()

// const [fun,sum] = (n1, n2) => (n1+n2, {username:'anant'})
// const [sum, obj] = (n1, n2) => [(n1 + n2), { username: 'anant' }];
const [sum, obj] = ((n1, n2) => [(n1 + n2), { username: 'anant' }])(5, 7);
console.log(sum, obj);

// console.log(sum(1, 3), obj())


// (function chai() {
//     console.log('named iife')
// })();

// ( (n1, n2) => {
//     console.log('unnamed arrow iife')
//     console.log(n1, n2)
// })()
