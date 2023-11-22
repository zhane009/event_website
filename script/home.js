
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

// const xhttpr = new XMLHttpRequest(); 
// xhttpr.open('GET', 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music,Sports&countryCode=UK&apikey=tr5Ym0keqAAxUXx12Zsius14yoZwLfys', true); 
  
// xhttpr.send(); 
  
// xhttpr.onload = ()=> { 
//   if (xhttpr.status === 200) { 
//       const response = JSON.parse(xhttpr.response); 
//       localStorage.setItem('data', JSON.stringify(response._embedded.events));
//   } else { 
//       // Handle error 
//   } 
// }; 

function getEvents() {
  return fetch("./data/events.json")
  .then(response => response.json())
  // .then(data => {
  //   // console.log(data);
  //   return data;
  // });
  
};

getEvents().then(data => {
  console.log(data);

  var events = data.events;
  var i = 0;
  
  document.querySelector("#event1 .eventTitle").innerHTML = events[0].title;
  document.querySelector("#event1 .eventDesc").innerHTML = events[0].brief;

  for (let event in events){
    var id = "#event" + (i + 1);
    console.log(id + " .eventTitle");
    document.querySelector(id + " .eventTitle").innerHTML = events[i].title;
    document.querySelector(id + " .eventDesc").innerHTML = events[i].brief;
    document.querySelector(id + " img").src = events[i].image;
    i++;
  }


});
// for (let i = 0; i < 2; i++){
//   console.log(events[i]);
// } 