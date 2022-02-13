car=["himanshu",1,2,'annu']
console.log(car)

car[1]="pushpa"
console.log(car)


// methods in array
car.pop()
console.log(car[2])

car.push("darling")
console.log(car)


// unshift method--> this adds a element at the starting of tha Array

car.unshift("annujanu")
console.log(car)

// shift method--> it removes Element from 0th index of aaray

car.shift()
console.log(car)
console.log(car.length)


// 2d array
// 2d is an array which consist of arrays

let aaray2d=[   
        [1,1,1],
        [2,3,5],
        [8,9,50]

]
// ["a","b","c"]array  of string
 
console.log(aaray2d)
console.table(aaray2d)

console.log(aaray2d[1][1])

console.log(aaray2d[1])

let ans=aaray2d[1]
console.log(ans[2]);