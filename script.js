
var nameError = document.getElementById('name-error');
var phonError = document.getElementById('phone-error');
var messegeError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = 'Valid';
    return true;

}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phonError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phonError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match (/^[0-9]{10}$/)){
        phonError.innerHTML = 'Phone no is required';
        return false;
    }
    phonError.innerHTML = 'Valid';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'More characters required';
        return false;
    }

    messageError.innerHTML = 'valid';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}



// var navbar = document.getElementById('nav');


// function myFunction() {
//     var navbar = document.getElementById('nav');
//     navbar.classList.toggle('show');
// }


// var btn = document.querySelector('.toggle');
// var btnst = true;
// btn.onclick = function() {
//   if(btnst == true) {
//     document.querySelector('.toggle span').classList.add('toggle');
//     document.getElementById('nav').classList.add('navshow');
//     btnst = false;
//   }else if(btnst == false) {
//     document.querySelector('.toggle span').classList.remove('toggle');
//     document.getElementById('nav').classList.remove('navshow');
//     btnst = true;
//   }
// }