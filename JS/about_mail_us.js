let sendEmailBtn = document.querySelector("#mail_us button");
let emailIn = document.querySelector("#mail_us .email_input");
let firstNameIn = document.querySelector("#mail_us .first_name_input");
let lastNameIn = document.querySelector("#mail_us .last_name_input");
let subjectIn = document.querySelector("#mail_us .subject_input");
let messageIn = document.querySelector("#mail_us .message_input");

function sendEmail() {
    let url = `https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to=${encodeURIComponent('marwanmarwan536@gmail.com')}
&su=${encodeURIComponent(subjectIn.value)}&body=${encodeURIComponent(`Hello, my name is ${firstNameIn.value} ${lastNameIn.value}!
` +messageIn.value)}`
    //console.log("message:",url)
    window.open(url, "_blank").focus();
}


sendEmailBtn.addEventListener('click',sendEmail)

