let person = {
    name: "akash",
  };
  
  console.log(person);
  
  function change(person) {
    person = 12;
  }
  
  change(person);
  
  console.log(person);
  
  // When we pass an object argument to a function, the function parameter receives a reference to the original object. This means any changes made to the object's properties within the function will be reflected outside the function. But when we reassign the function parameter to a new value, we are not modifying the original object but instead changing what the local variable/ parameter person points to. This reassignment does not affect the reference outside the function.
  
  // to help understand visualize the concept, i made the the following example. It helps understand to think of paramter as a new variable, which in terms of primitive value, receives the copy of argument/existing variable and in terms of refence value, the parameter receives the reference of the argument.
  
  // Funciton parameters are like declaring a new variable and arguments are like existing variable assigning to that new variable.
  
  let personReference = person;
  
  personReference = 123;
  
  console.log(person);
  
  console.log(personReference);
  