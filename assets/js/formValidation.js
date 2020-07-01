const isFormValid = () => {

  let name = document.querySelector('input[name=name]').value;
  let replyto = document.querySelector('input[name=replyto]').value;
  let message = document.querySelector('textarea[name=message]').value;
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (name === "" || name === undefined){
    return false;
  }
  else if (replyto === "" || replyto === undefined){
    return false;
  }
  else if (!regex.test(replyto.toLowerCase())){
    return false;
  }
  else if (message === "" || message === undefined){
    return false;
  }

  return true;
}

export { isFormValid };
