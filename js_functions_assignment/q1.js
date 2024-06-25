
function greet(name, callback) {
    console.log('Hello, ' + name );
    callback();
}

// Define a callback function to be passed as an argument
function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
