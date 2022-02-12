// objects --> group of key : value pair
// key: value --> property
// key: function --> method



let cap={
    name:"himanshu",
    address:{
        city:"hardoi",
        state:"up",
    },
    age:30,
    gf:["muskan","ruchi","choot"],
    sayhi: function(){
        console.log("hello ");
    }


};

// fetch quaries
console.log(cap.address);
cap.sayhi()


// set and update

cap.age=30;
cap.address=["hardoi", "lucknow"];
console.log(cap.age);
console.log(cap.address);

// // delete
delete cap.age
console.log(cap.age);


// for get from looping
for(let key in cap){

    console.log(cap[key]);
}

let himanshu="age";
console.log(cap[himanshu]);