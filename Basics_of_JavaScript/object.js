// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Jimmy",
    "full name": "Jimmy ",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangalore",
    email: "Jimmy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}


JsUser.email = "Jimmy@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Jimmy@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());