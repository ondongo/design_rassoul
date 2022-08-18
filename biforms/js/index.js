var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
    var username = document.getElementById("username");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        username.setCustomValidity(issueArr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}

function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
        issueArr.push("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}



// /**
//  * Define a function to navigate betweens form steps.
//  * It accepts one parameter. That is - step number.
//  */
//  const navigateToFormStep = (stepNumber) => {
//     /**
//      * Hide all form steps.
//      */
//     document.querySelectorAll(".form-step").forEach((formStepElement) => {
//         formStepElement.classList.add("d-none");
//     });
//     /**
//      * Mark all form steps as unfinished.
//      */
//     document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
//         formStepHeader.classList.add("form-stepper-unfinished");
//         formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
//     });
//     /**
//      * Show the current form step (as passed to the function).
//      */
//     document.querySelector("#step-" + stepNumber).classList.remove("d-none");
//     /**
//      * Select the form step circle (progress bar).
//      */
//     const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
//     /**
//      * Mark the current form step as active.
//      */
//     formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
//     formStepCircle.classList.add("form-stepper-active");
//     /**
//      * Loop through each form step circles.
//      * This loop will continue up to the current step number.
//      * Example: If the current step is 3,
//      * then the loop will perform operations for step 1 and 2.
//      */
//     for (let index = 0; index < stepNumber; index++) {
//         /**
//          * Select the form step circle (progress bar).
//          */
//         const formStepCircle = document.querySelector('li[step="' + index + '"]');
//         /**
//          * Check if the element exist. If yes, then proceed.
//          */
//         if (formStepCircle) {
//             /**
//              * Mark the form step as completed.
//              */
//             formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
//             formStepCircle.classList.add("form-stepper-completed");
//         }
//     }
// };
// /**
//  * Select all form navigation buttons, and loop through them.
//  */
// document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
//     /**
//      * Add a click event listener to the button.
//      */
//     formNavigationBtn.addEventListener("click", () => {
//         /**
//          * Get the value of the step.
//          */
//         const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
//         /**
//          * Call the function to navigate to the target form step.
//          */
//         navigateToFormStep(stepNumber);
//     });
// });



function Chbx() {
    Fields=document.getElementById("InputFields");
    N=document.getElementById("N").value;
    while (Fields.hasChildNodes()) {Fields.removeChild(Fields.lastChild);}
    for (i=0;i<N;i++) {
     //Fields.appendChild(document.createTextNode("Enfant " + (i+1)+" "));
     var label= document.createElement('label');
     label.id="n"+i ;
     label.class="form-group";
     label.setAttribute("class", "form-group");
     Fields.appendChild(label);
     
     Fa=document.getElementById("n"+i);
    
       var input = document.createElement('input');
     input.setAttribute("type", "text");
     input.setAttribute("placeholder", "Nom de l'enfant"+(i+1) +'');
     input.setAttribute("class", "inputFields");
       input.type = "text";
     input.class = "inputFields";
       input.name = "nom_enfant" + i;
       input.id = "k" + i;
     Fa.appendChild(input);
     //document.getElementById("k"+i).value=25;

       Fields.appendChild(label);
     
  }
//   Fields_date=document.getElementById("InputFields_date");
     
//   while (Fields_date.hasChildNodes()) {Fields_date.removeChild(Fields_date.lastChild);}   
//   for (i=0;i<N;i++) {
//        //Date de naissance
     
     
//      var label_date= document.createElement('label');
//      label_date.id="num"+i ;
//      label_date.class="form-group";
//      label_date.setAttribute("class", "form-group");
//      Fields_date.appendChild(label_date);
     
//      Fa_date=document.getElementById("num"+i);
    
//        var input_date = document.createElement('input');
//      input_date.setAttribute("type", "date");
//      input_date.setAttribute("class", "inputFields");
//        input_date.type = "date";
//      input_date.class = "inputFields";
//        input_date.name = "date" + i;
//        input_date.id = "k1" + i;
//      Fa_date.appendChild(input_date);
//      //document.getElementById("k"+i).value=25;
//      var span_date = document.createElement("span");
//      span_date.textContent=("Date de naissance de L'enfant" +(i+1) +'');
//      var border_date = document.createElement("span");
//     border_date.class= " border";
//     border_date.setAttribute("class", "border");
     
//      Fa_date.appendChild(span_date);
//      Fa_date.appendChild(border_date);
//        Fields_date.appendChild(label_date);
     
     
//     }
  
  
  
  
  
  
  
  
  
}
 Chbx();