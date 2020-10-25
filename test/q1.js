const myFunction = () => {
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function() {
        console.log('Index: ' + i);
      }, 3000);
    }
  };
  
  myFunction();


/*

In the var case: all the output will be 4 and the reason why is i declared in a "var" and "var" is a function scoop,


In the let case: the output will be "0, 1, 2, 3" and the reason why is i declared in "let" and "let" is a block scoop

*/