
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".message");
const form = document.querySelector(".feedback-form");
const obj = {};
const storage = localStorage.getItem("feedback-form-state");

if(storage !== null) {
    const parsedStorage = JSON.parse(storage);
    emailInput.value = parsedStorage.email;
    messageInput.textContent = parsedStorage.message;
    obj.email = parsedStorage.email;
    obj.message = parsedStorage.message;
}


emailInput.addEventListener("input", _.throttle(emailSet, 500));
messageInput.addEventListener("input", _.throttle(messageSet, 500));

function emailSet(evt){
    obj.email = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}

function messageSet(evt){
    obj.message = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}


form.addEventListener("submit", evt => {
    evt.preventDefault();
    console.log(obj);

    localStorage.removeItem("feedback-form-state");
    evt.currentTarget.reset();
})

