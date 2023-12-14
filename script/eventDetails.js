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

      document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-sun");
      localStorage.darkMode = false;
      document.querySelector(".details").setAttribute("style", "background-color: white;");
      document.querySelector(".desc").setAttribute("style", "background-color: white;");
    } 

    else {

      document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-moon");
      localStorage.darkMode = true;
      document.querySelector(".details").setAttribute("style", "background-color: #333; color: gainsboro;");
      document.querySelector(".desc").setAttribute("style", "background-color: #333; color: gainsboro;");
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
  document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-sun");
  document.querySelector(".details").setAttribute("style", "background-color: white;");
  document.querySelector(".desc").setAttribute("style", "background-color: white;");

}
else {
  document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-moon");
  document.querySelector(".details").setAttribute("style", "background-color: #333; color: gainsboro;");
  document.querySelector(".desc").setAttribute("style", "background-color: #333; color: gainsboro;");
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