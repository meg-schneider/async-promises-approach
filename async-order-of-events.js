const one = () => Promise.resolve('One!');

async function myFunc() {
  console.log('in function');
  const res = await one();
  console.log(res);
}

console.log('Before function');
myFunc();
console.log('After function');