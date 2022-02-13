// let singlequeotesstring='  himanshu  singh chauhan  '
// let doublequotesstring="annu"

// console.log(singlequeotesstring);
// console.log(doublequotesstring);

// let char=doublequotesstring.charAt(1)
// console.log(char);

// let Ascii=doublequotesstring.charCodeAt(2)
// console.log(Ascii);

// singlequeotesstring=singlequeotesstring.trim()
// let arrstr=singlequeotesstring.split(" ")
// let str=arrstr.join("+");


// console.log(str);

var str="hello himanshu"
console.log(str.length); //for length of string
console.log(str[4]); // specific character printing


// string method

// 1. Extract method

// slice method
// SecurityPolicyViolationEvent(start , end) starting index is inclusive but end inded is exclusive
 let slicestr=str.slice(2,7)
 console.log(slicestr);

// substring method

let ans = str.substr(2,6)
console.log(ans);

