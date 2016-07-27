// Get contact button and assign event
document.querySelector('.contact #sendButton').addEventListener(
  'click',
  sendContactMessage
);

function sendContactMessage() {
  // Get data
  let data = {
    name: document.querySelector('input[name=\'name\']').value,
    surname: document.querySelector('input[name=\'surname\']').value,
    email: document.querySelector('input[name=\'email\']').value,
    message: document.querySelector('textarea').value
  }

  if(isDataValid(data))
    send()
}

function isDataValid(data) {
  // Check for empty values
  for(let key in data)
    if(data.hasOwnProperty(key))
      if(data[key] == '') {
        showErrorMessage(key + ' field cannot be empty');
        return false;
      }

  // Check e-mail format
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!regex.test(data.email)) {
    showErrorMessage('Invalid e-mail address');
    return false;
  }

  return true;
}

function showErrorMessage(errorText) {
  let errorTitle = document.querySelector('h2.error');
  errorTitle.innerHTML = errorText;
  errorTitle.style.fontSize = '20px';

  setTimeout(
    function () {
      document.querySelector('h2.error').style.fontSize = '0';
    },
    2000
  );
}

function send() {
  // Associate IDs with values
  let domQueries = [
    'input[name=\'name\']',
    'input[name=\'surname\']',
    'input[name=\'email\']',
    'textarea'
  ];

  let data = {};

  domQueries.map(
    el => {
      let id = document.querySelector(el).dataset.id;
      data[id] = document.querySelector(el).value;
    }
  );

  // Build request data
  let reqData = '';

  for(key in data) {
    reqData += key + '=' + data[key] + '&';
  }

  // Get form info and generate request
  let formURL = document.querySelector('form').dataset.url;
  document.querySelector('form').action = formURL + reqData + 'submit=submit';
  document.querySelector('form').submit();

  let title = document.querySelector('section.contact h2.error');
  document.querySelector('section.contact form').style.maxHeight = '0';
  title.className = 'thankyou';
  title.innerHTML = 'Your message has been sent. Thank you!';
  title.style.fontSize='20px';
}