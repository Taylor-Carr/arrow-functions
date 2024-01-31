// Vanilla Javascript function

// arrow function with paraneters

// function addTwoNumbers (a, b) {
    // code block 
    //return a + b
//}

//let sum = addTwoNumbers (3, 5);
//console.log(sum);


// single line arrow function with parameters, use for simple functions with little to no logic 

const addTwoNumbers2 = (a, b ) => a + b;

// implicit returns

const saySomething = message => console.log(message);

const sayHello = () => console.log('hello');

// returning multiple lines

const returnMultipleLines = () => (
    `<p>
    this is a multyline string
    </p>`
)

console.log(returnMultipleLines());