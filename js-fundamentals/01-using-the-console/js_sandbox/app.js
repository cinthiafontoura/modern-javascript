// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});

// To log the object as a table
console.table({a:1, b:2});

// To throw an error, warning or clear the console
console.error('This is some error');
console.clear();
console.warn('This is a warning');

// To check how long takes to load write the script between console.time and console.timeEnd
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');

/*
  multi
  line
  comments
*/