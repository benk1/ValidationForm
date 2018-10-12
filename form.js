
const inputs = document.querySelectorAll('input[type="text"],input[type="email"],input[type="url"], textarea');
const button = document.querySelector ('#button1');

//console.log (inputs);

const patterns = {
  fullname: /^[a-zA-Z]{1,7}\s{1}[a-zA-Z]{1,7}$/,
  //email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
  postcode:  /^[0-9]{5}$/,  
  country: /^[a-zA-Z]{5,15}$/,
  city: /^[a-zA-Z]{5,15}$/,
  state: /^[a-zA-Z]{5,15}$/,
  phone: /^[+]{1}[0-9]{1,12}$/,
  email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
  reemail: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
  address: /^[a-zA-Z ]{1,15}[0-9]{1,9}[a-zA-Z ]{1}[0-9 ]{1,9}$/,
  infobox:  /^[a-zA-Z ]{1,50}$/,
  HowDidYouHearAboutUs: /^[A-Za-z ]{1,50}$/,
  potfolio: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{1,4}(:[0-9]{1,5})?(\.*)?$/,
  
};



let arrayInputs = Array.from(inputs);
const validInputs = () => {
//function validInputs() {
  return arrayInputs.every(input=>{
          return input.className == 'valid'   
  });  
} 

inputs.forEach (element => {
  element.addEventListener ('input', e => {
    formValidator (e.target, patterns[e.target.name]);
  });
});

const formValidator = (element, pattern) => {
  if (pattern.test (element.value)) {
    element.className = 'valid';
    if(validInputs()){
      button.className = 'submit-button';
      button.disabled = false;
    }   
  } else {
    element.className = 'invalid';
    button.classList.remove ('submit-button');
    button.disabled = true;
  }
};