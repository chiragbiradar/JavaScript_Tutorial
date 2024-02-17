// Immediately invoked function expression (IIFE)

(function chirag(){
    //named iife
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connect two ${name}`);
} )('chirag')
