
function responsiveNav() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

var icon = document.querySelector(".icon");
icon.addEventListener("click", responsiveNav);

var darkMode = document.querySelector("#dark-mode");
darkMode.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
      if (document.title == "Home Page") {
        document.querySelector(".background").style.opacity = "0.9";
        document.querySelector(".text-on-background").style.color = "var(--primary-color)";    
      }
      document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-sun");
      localStorage.darkMode = false;
    } 

    else {
      if (document.title == "Home Page"){
        document.querySelector(".background").style.opacity = "0.5";
        document.querySelector(".text-on-background").style.color = "var(--primary-color)";
      }
      document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-moon");
      localStorage.darkMode = true;
    }
}
);	

var control = document.querySelector("#controlButton");
control.addEventListener("click", function() {
  var button = document.querySelector(".buttons");
  button.classList.toggle("active");
});


var buttons = document.querySelectorAll(".control .buttons .row button");
buttons.forEach(item =>{
  item.addEventListener("click", function() {
    document.documentElement.style.setProperty("--primary-color", item.style.backgroundColor);
    document.documentElement.style.setProperty("--secondary-color", item.style.color);
    localStorage.primaryColor = item.style.backgroundColor;
    localStorage.secondaryColor = item.style.color;
  })
});

if (localStorage.primaryColor == "skyblue") {
  document.documentElement.style.setProperty("--primary-color", "skyblue");
  document.documentElement.style.setProperty("--secondary-color", "dodgerblue");
}
else if (localStorage.primaryColor == "yellow") {
  document.documentElement.style.setProperty("--primary-color", "yellow");
  document.documentElement.style.setProperty("--secondary-color", "orange");
}
else if (localStorage.primaryColor == "rgb(255, 0, 78)") {
  document.documentElement.style.setProperty("--primary-color", "#ff004e");
  document.documentElement.style.setProperty("--secondary-color", "#ff8d00");
}
else if (localStorage.primaryColor == "yellowgreen") {
  document.documentElement.style.setProperty("--primary-color", "yellowgreen");
  document.documentElement.style.setProperty("--secondary-color", "yellow");
}
else if (localStorage.primaryColor == "orange") {
  document.documentElement.style.setProperty("--primary-color", "orange");
  document.documentElement.style.setProperty("--secondary-color", "yellowgreen");
}
else if (localStorage.primaryColor == "rgb(142, 0, 255)") {
  document.documentElement.style.setProperty("--primary-color", "#8e00ff");
  document.documentElement.style.setProperty("--secondary-color", "#ff00e8");
}



var fontIncre = document.querySelector("#font-incre");

fontIncre.addEventListener("click", function() {
  	document.body.style.fontSize = "x-large";
    localStorage.fontSize = "x-large";
}
);

var fontDecre = document.querySelector("#font-decre");

fontDecre.addEventListener("click", function() {
  	document.body.style.fontSize = "medium";
    localStorage.fontSize = "medium";  
}
);

var fontReset = document.querySelector("#font-reset");
fontReset.addEventListener("click", function() {
    document.body.style.fontSize = "large";         
    localStorage.fontSize = "large";           
}
);

if(localStorage.darkMode == "false") {
  document.body.classList.add("dark");
  if (document.title == "Home Page") {
    document.querySelector(".background").style.opacity = "0.9";
    document.querySelector(".text-on-background").style.color = "var(--primary-color)";
  }
  document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-sun");
}
else {
  if (document.title == "Home Page") {
    document.querySelector(".background").style.opacity = "0.5";
    document.querySelector(".text-on-background").style.color = "var(--primary-color)";
  }
  document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-moon");
}

if (localStorage.fontSize == "x-large"){
  document.body.style.fontSize = "x-large";
}
else if (localStorage.fontSize == "medium"){
  document.body.style.fontSize = "medium";
}
else {
  document.body.style.fontSize = "large";
}

var saveBtn = document.querySelector("#save-btn");

function validateEmail(email) {
    if (isEmpty(email)) {
        return false;
    }
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}

function validatePhone(phone) {
    if (isEmpty(phone)) {
        return false;
    }
    var re = /^\d{10}$/;
    return re.test(phone);
}

function isEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return true;
  return !(value.length > 0);
}

function onSubmit(token) {
  document.getElementById("contact-form").submit();
}

saveBtn.addEventListener("click", function() {
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var reason = document.querySelector("#reason").value;

    if (isEmpty(firstName) || isEmpty(lastName) || !validateEmail(email) || !validatePhone(phone) || isEmpty(reason)) {

      if (isEmpty(firstName)) {
          document.querySelector("#firstName").classList.add("error-border");
          document.querySelector("#fname-error").style.opacity = "1";
      }
      else {
          document.querySelector("#firstName").classList.remove("error-border");
          document.querySelector("#fname-error").style.opacity = "0";
      }

      if (isEmpty(lastName)) {
          document.querySelector("#lastName").classList.add("error-border");
          document.querySelector("#lname-error").style.opacity = "1";
      }
      else {
          document.querySelector("#lastName").classList.remove("error-border");
          document.querySelector("#lname-error").style.opacity = "0";
      }

      if (!validateEmail(email)) {
          document.querySelector("#email").classList.add("error-border");
          document.querySelector("#email-error").innerHTML = "Email is required!";
          if(!isEmpty(email)) {
            document.querySelector("#email-error").innerHTML = "Invalid Email";
          }
          document.querySelector("#email-error").style.opacity = "1";
      }
      else {
          document.querySelector("#email").classList.remove("error-border");
          document.querySelector("#email-error").style.opacity = "0";
      }

      if (!validatePhone(phone)) {
          document.querySelector("#phone").classList.add("error-border");
          document.querySelector("#phone-error").innerHTML = "Phone Number is required!";
          if(!isEmpty(phone)) {
            document.querySelector("#phone-error").innerHTML = "Invalid Phone Number";
          }
          document.querySelector("#phone-error").style.opacity = "1";
      }
      else {
          document.querySelector("#phone").classList.remove("error-border");
          document.querySelector("#phone-error").style.opacity = "0";
      }

      if (isEmpty(reason)) {
          document.querySelector("#reason").classList.add("error-border");
          document.querySelector("#reason-error").style.opacity = "1";
      }
      else {
          document.querySelector("#reason").classList.remove("error-border");
          document.querySelector("#reason-error").style.opacity = "0";
      }
    }

    else {
        localStorage.fname = firstName;
        localStorage.lname = lastName;
        localStorage.email = email;
        localStorage.phone = phone;
        localStorage.message = reason;
        alert("We will reach out to you soon!");
        location.reload();

    }
    
}   
);