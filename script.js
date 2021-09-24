const input = document.getElementById('email')
const btn = document.querySelector('button');
const message = document.getElementById('message');

btn.addEventListener("click", function(e) {

    if ('' == input.value) {
        return message.textContent = "Oops! Please add your email";
    } else {
        return message.textContent = "Oops! Please check your email";
    }
})