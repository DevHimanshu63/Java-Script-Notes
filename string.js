let singlequeotesstring='  himanshu  singh chauhan  '
let doublequotesstring="annu"

console.log(singlequeotesstring);
console.log(doublequotesstring);

let char=doublequotesstring.charAt(1)
console.log(char);

let Ascii=doublequotesstring.charCodeAt(2)
console.log(Ascii);

singlequeotesstring=singlequeotesstring.trim()
let arrstr=singlequeotesstring.split(" ")
let str=arrstr.join("+");

console.log(str);