
const inputs = document.querySelectorAll('input[type="text"],input[type="email"], textarea');
const button = document.querySelector ('button');

//console.log (inputs);

const patterns = {
  fullname: /^[a-zA-Z]{7}\s{1}[a-zA-Z]{7}$/,
  //email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
  postcode:  /^[0-9]{5}$/,  
  country: /^[a-zA-Z]{5,15}$/,
  city: /^[a-zA-Z]{5,15}$/,
  state: /^[a-zA-Z]{5,15}$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\0-9]*$/g,
  email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
  reemail: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
  address: /^[a-zA-Z]{1,15}[\s][0-9]{1}[a-zA-Z]{1}[\s][0-9]$/g,
  infobox:  /^[a-zA-Z]{10}/,
  HowDidYouHearAboutUs: /^[A-Za-z]{30}/,
  potfolio: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
  
};



let arryInputs = Array.from(inputs);

function validInputs() {
  return arryInputs.every(input=>{
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