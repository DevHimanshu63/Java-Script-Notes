// // objects --> group of key : value pair
// // key: value --> property
// // key: function --> method



// let cap={
//     name:"himanshu",
//     address:{
//         city:"hardoi",
//         state:"up",
//     },
//     age:30,
//     gf:["muskan","ruchi","choot"],
//     sayhi: function(){
//         console.log("hello ");
//     },
//     himanshu:function(){
//         console.log(`hello my name is ${this.name}`);
//     }


// };

// // fetch quaries
// console.log(cap.address);
// cap.himanshu();
// // cap.sayhi()


// // set and update

// cap.age=30;
// cap.address=["hardoi", "lucknow"];
// console.log(cap.age);
// console.log(cap.address);

// // // delete
// delete cap.age
// console.log(cap.age);


// // for get from looping
// // for(let key in cap){

// //     console.log(cap[key]);
// // }

// cap.himanshu();


let himanshu={
        good:"morning",
        arisetime:"9:30",
         him:function(){
            console.log("hello");
        },
        address:{
            gram:"baseliya",
            city:"hardoi",
            state:"uttar pradesh"
            
        }

}
console.log(himanshu);
himanshu.him()


for(let key in himanshu){
    console.log(key,himanshu[key]);
}