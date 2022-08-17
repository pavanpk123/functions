var x = 10;

function createFunction1() {
  x = 20;
  return new Function('return x;');
}
console.log(x)