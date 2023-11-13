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
      document.querySelector(".background").style.opacity = "0.9";
      document.querySelector(".text-on-background").style.color = "white";
      document.querySelector("#dark-mode").setAttribute("class", "fa-solid fa-sun");
      localStorage.darkMode = false;
    } 
    else {
      document.querySelector(".background").style.opacity = "0.5";
      document.querySelector(".text-on-background").style.color = "skyblue";
      document.querySelector("#dark-mode").setAttribute("class", "fa-solid fa-moon");
      localStorage.darkMode = true;
    }
}
);	

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
  document.querySelector(".background").style.opacity = "0.9";
  document.querySelector(".text-on-background").style.color = "white";
  document.querySelector("#dark-mode").setAttribute("class", "fa-solid fa-sun");
}
else {
  document.querySelector(".background").style.opacity = "0.5";
  document.querySelector(".text-on-background").style.color = "skyblue";
  document.querySelector("#dark-mode").setAttribute("class", "fa-solid fa-moon");
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

