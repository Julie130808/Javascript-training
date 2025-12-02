function multiples3(nombres) {
    return nombres % 3 === 0;
}
function multiples5(nombres) {
    return nombres % 5 === 0;
}
function multiples3et5(nombres) {
    return nombres % 3 === 0 && nombres % 5 === 0;
}

for (let nombres = 1; nombres <= 151; nombres++) {
    if (multiples3et5(nombres)) {
        console.log("FizzBuzz");
    } else if (multiples3(nombres)) {
        console.log("Fizz");
        
    } else if (multiples5(nombres)) {
        console.log("Buzz");
    } else 
        console.log(nombres);
}