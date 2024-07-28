function gcd(a,b){
    while(b !=0){

    
    let temp = b;
    a = a%b;
    a  = temp;
    }
    return a;
}

function lcm(a,b){
    return (a*b)/gcd(a,b);

}
let num1 = parseInt(prompt("Enter first number "));
let num2 = parseInt(prompt("Enter second number"));
 

console.log(`The LCM of ${num1} and ${num2} is ${lcm(num1 , num2)}`);
function reverseNumber(num){
    let reverse = 0;
    while(num>0){
      let lastdigit = num % 10;
      reverse = reverse*10 + lastdigit;
      num = Math.floor(num/10);
    }
    return reverse;
}
let number = parseInt(prompt("Enter the number you want to reverse"));
console.log(`The reverse of ${number} is ${reverseNumber(number)}.`);
