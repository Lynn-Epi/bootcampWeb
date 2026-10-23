export function fizzBuzz(num) {
  let number = 1;
  let array = [];
  while (number <= num) {
    if (number % 5 === 0 && number % 3 === 0) {
      array.push("FizzBuzz");
    } else if (number % 3 === 0) {
      array.push("Fizz");
    } else if (number % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(number);
    }

    number++;
  }
  console.log(array.join(", "));
}
