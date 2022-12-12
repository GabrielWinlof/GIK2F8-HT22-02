todoForm.title.addEventListener("input", (e) =>validateField(e.target));
todoForm.title.addEventListener("blur", (e) =>validateField(e.target));
todoForm.description.addEventListener("input", (e) =>validateField(e.target));
todoForm.description.addEventListener("blur", (e) =>validateField(e.target));
todoForm.dueDate.addEventListener("input", (e) =>validateField(e.target));
todoForm.dueDate.addEventListener("blur", (e) =>validateField(e.target));

todoForm.addEventListener("submit", onsubmit);

let titleValid = true;
let descriptionValid = true;
let dueDateValid = true;

function validateField(field){
    const {name, value} = field;

    let = validationMessage ="";
    switch(name){
        case "title":{
          if(value.length < 2){
           titleValid = false;
           validationMessage="Fältet titel måste innehålla minst 2 tecken";
          }  else if (value.length > 100){
                titleValid = false;
                validationMessage="Fältet titel får inte  innehålla mer än 100 tecken";
          }
          break;
        }
        case "description":{
            if (value.length > 500){
            descriptionValid = false;
            validationMessage="Fältet beskrivning får inte  innehålla mer än 500 tecken";
      }
            break;
        }
        case "dueDate":{
            if (value.length == 0){
                dueDateValid = false;
                validationMessage="Fältet slutförd senast är obligatorisk";
            
        }
        break;
    }
}

field.previousElementSibling.innerText = validationMessage;
field.previousElementSibling.classList.remove("hidden");


}
function onsubmit(e){
e.preventDefault();

}

