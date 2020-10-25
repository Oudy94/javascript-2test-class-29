   function parent() {
     var hoisted = "I'm a variable";
     function hoisted() {
         return "I'm a function";
     }
     return hoisted(); 
   }
   console.log(parent());


   /*
    the "hoisted" is declared twice as a variable and as a function in the same scoop, so the output will be an error

   */