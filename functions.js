// // non-primitive=> array , objects , functions

// // function define
// function sayhi(params) {
//     // console.log(params)
//     let rval=Math.random()>0.5?true:"less than 0.5";
//     return rval;

// }

// // funcation call
// let rval=sayhi([1,2,3,4,5])
// console.log("rval",rval);



// function expression

// let sayHi= function abcd (){
//     console.log("hello i am  function expression")
   
// }
// console.log(""+sayHi)
// sayHi()


// imediate invoke function 

let addition=(function add(a,b){
console.log(a+b);
})

(20,30)