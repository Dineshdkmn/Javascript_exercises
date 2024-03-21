// Dates

let myDate = new Date()

let myCreatedDate = new Date("03-07-2023")


let myTimeStamp = Date.now()



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

