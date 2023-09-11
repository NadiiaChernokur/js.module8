import lodash from "lodash.throttle";

const feedback = document.querySelector(".feedback-form");
const email = feedback.querySelector("[name='email']");
const textarea = feedback.querySelector("[name='message']")
const submitButton = feedback.querySelector("[type='submit']");

 feedback.addEventListener("input", lodash(saveMessage, 500));
window.addEventListener("load", rebootPage);
 submitButton.addEventListener("click", clickSubmit)

function saveMessage(evt) {
    evt.preventDefault();
    const messegeObject = {
        Email: email.value,
        Message: textarea.value
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(messegeObject))
};

function rebootPage() {
    const getItemText = localStorage.getItem("feedback-form-state")
    const getItemTextParse = JSON.parse(getItemText);

    if(getItemText) {
        const getEmail = email.value = getItemTextParse.Email;
       const getMessege = textarea.value = getItemTextParse.Message
        // return textarea.value = getItemTextParse.Message 
        return;
    }
};

function clickSubmit(e) {
    e.preventDefault();

    if (email.value === "" || textarea.value === ""){
        return alert("Всі поля повинні бути заповнені");
      } 
      const formData = {
        Email: email.value,
        Message: textarea.value
    };

    console.log(formData)

    email.value = "";
    textarea.value = ""
   
   localStorage.removeItem("feedback-form-state");
};

