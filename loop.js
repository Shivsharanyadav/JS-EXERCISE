// Function to print the multiplication table
function printMultiplicationTable(number) {
    let i = 1; // Initialize the counter
    while (i <= 10) { // Loop until 10
        console.log(`${number} * ${i} = ${number * i}`);
        i++; // Increment the counter
    }
}

// Example usage
let number = parseInt(prompt("Enter a number: "));
printMultiplicationTable(number);
 
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}
let number = parseInt(prompt("Enter positive number"));
if(number<0){
    console.log("ERROR PLEASE ENTER POSITIVE NUMBER");
}
else{
    
    console.log(`The factorial of ${number} is ${factorialRecursive(number)}.`);

}
