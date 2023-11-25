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

const fun = (n1, n2) => (n1+n2)
console.log(fun(2,5))
