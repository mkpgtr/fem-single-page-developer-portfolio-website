const email = document.getElementById("email");
const submitBtn = document.querySelector(".submit-form");
const name = document.getElementById("name");
const nameError = name.nextElementSibling;
const error = email.nextElementSibling;
const message = document.getElementById('message')
const messageError = message.nextElementSibling;
const contactForm = document.querySelector('.contact-form')


const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed e-mail address.
  const isValid = email.value.length === 0 && 'empty-field' || emailRegExp.test(email.value);
  


  if(isValid!=='empty-field'){

      email.className = isValid ? "valid" : "invalid";
    }
    
    email.className = isValid ? "empty-field-on-load" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("keyup", () => {

    error.textContent = ''
    const isValid = email.value.length === 0 && 'empty-field' || emailRegExp.test(email.value);
  


    console.log(isValid);

    if(isValid === 'empty-field'){
        email.className = 'empty-field';
        console.log(error);
        error.textContent = 'field cannot be left empty';
        
    }
    else{
        if (isValid) {
            email.className = "valid";
            error.textContent = "";
            error.className = "error";
          } else {
            email.className = "invalid";
          }

    }
  
});

name.addEventListener('keyup',()=>{

    nameError.textContent = ''
    const isValid = name.value.length === 0 && 'empty-field' || true;
  


    console.log(isValid);

    if(isValid === 'empty-field'){
        name.className = 'empty-field';
        console.log(error);
        nameError.textContent = 'name cannot be left empty';
        
    }
    else{
        if (isValid) {
            name.className = "valid";
            nameError.textContent = "";
            nameError.className = "error";
          } else {
            name.className = "invalid";
          }

    }
    

})


message.addEventListener('keyup',()=>{

    messageError.textContent = ''
    const isValid = message.value.length === 0 && 'empty-field' || true;
  


    console.log(isValid);

    if(isValid === 'empty-field'){
        message.className = 'empty-field';
        messageError.textContent = 'message cannot be left empty';
        messageError.style.top = '-1rem';
        
    }
    else{
        if (isValid) {
            message.className = "valid";
            messageError.textContent = "";
            messageError.style.top = '-4rem';
            messageError.className = "error";
          } else {
            message.className = "invalid";
          }

    }
    

})


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let errorName = ''
    // if(name.value==='' || email.value === '' || message.value === ''){
    //     errorName = 'plaese fill all fields'
    //    return;
    // }
    if(!message.classList.contains('valid') || !name.classList.contains('valid')|| !email.classList.contains('valid') ){
        


      if(name.value===''){
          nameError.textContent = 'cannot be empty'
          console.log('empty name field');
    }
    if(email.value===''){
        error.textContent = 'cannot be empty'
        console.log('empty email field');
    }
    console.log(message.value===false)
    if(message.value===''){
        messageError.textContent = 'cannot be empty'
        console.log(message.value);
      }
        throw new Error('some field is invalid')
    }

    console.log(contactForm);
    if(error.textContent==='' && nameError.textContent=== '' && messageError.textContent===''){
        contactForm.submit();
        

    }

 
    


})
