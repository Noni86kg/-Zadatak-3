const input = document.getElementById('email')
const btn = document.querySelector('button');
const message = document.getElementById('message');

function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  
btn.addEventListener("click", function(e) {
    e.preventDefault();

    if ('' == input.value) {
        return message.textContent = "Oops! Please add your email";
    } else if (!validateEmail(input.value)) {
        return message.textContent = "Oops! Please check your emai";
    } else if (validateEmail(input.value)) {
        return message.textContent = "";
    }
})