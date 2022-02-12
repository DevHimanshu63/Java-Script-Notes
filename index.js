// // // declaration of variable var , let , const
// // var a;



// // // string
// // //  '' single quote, double quote " " , ` ` backlit 

// // // initialize of a

// // a=10
// // console.log(a)

// // // typeof operator
// // console.log(typeof a)

// // // a="hello"  reinitialize of a
// // a="hello"
// // console.log(a)
// // console.log(typeof a)

// // a=null
// // console.log(a)
// // console.log(typeof a)


// // let variable
// let v=10
// console.log(v);
//    v=15
// console.log(v);


// // const variable

// // const a=10
// // console.log(a);
// // const a=12 SyntaxError: Identifier 'a' has already been declared
// // console.log(a);

// // a=122
// // console.log(a);

// //  variable types : premitive types : number, string , boolean ,null,symbol;


// // let number =10;
// // for(let i=0 ;i< number ;i++){
// //     console.log(i)
// // }

// let number =23;
// let flag=true;

// for(let div=2 ; div<=number ;div++){
//     if (number%div==0) {
//         flag=true;
//         break;
//     }
// }
// if(flag==true){
//     console.log("is prime");
// }else{
//     console.log("not prime");
// }

// today class


// var keyword is a functional scoped  in case of function else it is global scope

num=10;
// for(var i =0 ;i< num ;i++){
//  console.log(i);    
// }
// console.log("the vaue of i is" + i);

// let keyword is block scoped

for(let i =0 ;i< num ;i++){
    console.log(i);    
   }
   console.log("the vaue of i is" + i);


//  here is also let  this is global scoped  like this ,
   let i; 
   for( i =0 ;i< num ;i++){
    console.log(i);    
   }
   console.log("the vaue of i is" + i);

