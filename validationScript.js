    // JavaScript code for form validation
  	
    // Retrieve the input field value
    let form = document.getElementById("myForm");
    let input = document.getElementById("inputField");
      
    // Adding event listener
    form.addEventListener("submit", function(event){
      let value = input.value;

    
    // Regular expression pattern for alphanumeric input
      let alphaNumericPattern = /^[a-zA-Z0-9]+$/;

      let isAlphanumeric = alphaNumericPattern.test(value);

    // Check if the input value matches the pattern
      if(!isAlphanumeric){
    // Invalid input: display error message 
        alert("Error: Please enter only letters and numbers, no spaces and symbols are allowed.")
        event.preventDefauld();
    // Valid input: display confirmation and submit the form  
      }else {
        alert("Great! Submitting the form now.")
      }
      
    });
    