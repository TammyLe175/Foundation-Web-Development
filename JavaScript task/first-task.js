/* declare the variable x and y
create a  basic expression
print out the value of the expression */
let x = 1
let y = 5
let z = x + y
console.log(z)
console.log((x + y) / 2)
/* Use if Else statment to check the variable x is either odd or even number */
if (x % 2 == 0) { 
    console.log("The number is Even");
}
else {
    console.log("The number is Odd");
}
/* Combine if else if statement and logical operating to compare the two values in x and y variables */
if (x < y && x == y) {
    console.log("x is less than and equal to y")
}
else if (x < y || x == y) {
    console.log("x is less than or equal to y")
}
else if (x > y) {
    console.log("x is greater than y")
}
else {
    console.log("either or both x & y is not an number")
}
/* by looping, we're print the number from 0 to 9 */
for (x = 0; x < 10; x++) {
    console.log(x);
}