const input = document.getElementById('email')
const btn = document.querySelector('button');
const message = document.getElementById('message');
const correctMails = ["nonisc2@gmail.com",
"nikola.pavlovic@quantoxtechnology.com",
"big.boy@gmail.com",
"cowboys.from.hell@gmail.com",
];


btn.addEventListener("click", function(e) {

    for (let i=0; i<correctMails.length; i++) {
        if (correctMails[i] == input.value.toLowerCase()) {
            return message.textContent = "";
        }
    }
    if ('' == input.value) {
        return message.textContent = "Oops! Please add your email";
    } else {
        return message.textContent = "Oops! Please check your email";
    }
})