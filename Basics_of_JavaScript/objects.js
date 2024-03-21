// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Joe"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jimmy",
            lastname: "Kate"
        }
    }
}



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}



const obj3 = {...obj1, ...obj2}



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Jimmy"
}



const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



[
    {},
    {},
    {}
]

