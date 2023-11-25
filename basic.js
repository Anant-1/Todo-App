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
// const [sum, obj] = ((n1, n2) => [(n1 + n2), { username: 'anant' }])(5, 7);
// console.log(sum, obj);

// console.log(sum(1, 3), obj())


// (function chai() {
//     console.log('named iife')
// })();

// ( (n1, n2) => {
//     console.log('unnamed arrow iife')
//     console.log(n1, n2)
// })()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const filteredNums = myNums.filter( (num)=>{
//     return num>4;
// })
// console.log(filteredNums)


// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4) newNums.push(num)
// })
// console.log(newNums)

// const newNums = myNums.map((num)=>num+10)
// console.log(newNums)

// const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>20)
// console.log(newNums)

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0)
// console.log(myTotal)

const myTotal = myNums.reduce((acc, currVal)=>(acc + currVal), 0)
console.log(myTotal)