// singleton


//Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Chirag",
    "full name": "Chirag Biradar",
    [mySym]: "mykey2",
    age: 18,
    location: "Glb",
    email: "chiragsb16@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);