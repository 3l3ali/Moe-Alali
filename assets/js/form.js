import { isFormValid } from './formValidation.js';

const formSubmit = () => {

  let form = document.getElementById('contact-form');
  let url = "https://formspree.io/mbjypzly";

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(isFormValid()){

      let name = document.querySelector('input[name=name]').value;
      let replyto = document.querySelector('input[name=replyto]').value;
      let message = document.querySelector('textarea[name=message]').value;
      let errors = document.getElementById('erros');
      const data = {
        name: name,
        replyto: replyto,
        message: message
      }

      fetch(url, {

        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

      })
      .then((response) => {

        if(response.ok){
          $("#submit-success").modal();
        }
        else{
          $("#submit-fail").modal();
        }

      });

    }
    else{
      errors.innerHTML = "wrong input";
    }
  });
}

export { formSubmit };
