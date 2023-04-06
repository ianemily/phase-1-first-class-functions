function receivesAFunction(callback) {
    callback();
  }
  
  // returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log('This is a named function.');
    }
  }
  
  // returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('This is an anonymous function.');
    }
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  }