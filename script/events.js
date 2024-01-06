
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
    } 

    else {

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
  document.querySelector("#dark-mode a").setAttribute("class", "fa-solid fa-sun");
}
else {
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


function getEvents() {
  return fetch("./data/events.json")
  .then(response => response.json())
};

getEvents().then(data => {
  var events = data.details;
  // var i = 0;
  var index = 0;

  for (let event in events){
    
    if (index >= events.length){
      break;
    }

    const eventArea = document.querySelector(".eventbox .events");
    const row = document.createElement("div");
    row.classList.add("event-row");

    do {
      if (index >= events.length){
        break;
      }
      var id = "event" + (index + 1);
      const container = document.createElement("a");
      container.href = "eventDetails.html";

      const div = document.createElement("div");
      div.classList.add("event");
      div.id = id;

      const img = document.createElement("img");
      img.classList.add("eventImage");
      img.src = events[index].image;

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      const overlay2 = document.createElement("div");
      overlay2.classList.add("overlay-text");

      const title = document.createElement("h3");
      title.classList.add("eventTitle");
      title.innerHTML = events[index].title;

      const desc = document.createElement("p");
      desc.classList.add("eventDesc");
      desc.id = "description";
      desc.innerHTML = events[index].brief; 

      const location = document.createElement("p");
      location.innerHTML = events[index].location;
      location.classList.add("eventDesc");
      location.id = "location";

      const date = document.createElement("p");
      date.innerHTML = events[index].date;
      date.classList.add("eventDesc");
      date.id = "date";

      

      div.appendChild(img);
      overlay2.appendChild(title);
      overlay2.appendChild(desc);
      overlay2.appendChild(location);
      overlay2.appendChild(date);

      // overlay.appendChild(button);
      div.appendChild(overlay);
      div.appendChild(overlay2);
      container.appendChild(div);
      row.appendChild(container)

      index += 1;

    }while (index % 2 != 0);

    eventArea.appendChild(row);

    // i++;
    if (index > events.length){
      break;
    }
  }


}).finally(function() {
  var events = document.querySelectorAll(".event");
  events.forEach(item => {
    item.addEventListener("click", function() {
      var id = item.id;
      localStorage.eventId = id;
    })
  })
});

var scrollBtn = document.querySelector("#scroll");

scrollBtn.addEventListener("click", function() {
  var events = document.querySelector(".eventbox");
    events.scrollIntoView({
        behavior: "smooth",
        alignTop: true
    });
});

var searchInput = document.querySelector("#search-bar");
searchInput.addEventListener("keyup", function(event) {
  const resultContainer = document.querySelector(".result-list");

  if (resultContainer.hasChildNodes()){
    resultContainer.innerHTML = "";
  }

  var search = event.target.value.toLowerCase();
  var events = document.querySelectorAll(".event");
  const container = document.querySelector(".results");
  if (search.length != 0){
    container.style.display = "block";
    events.forEach(item => {
      var title = item.querySelector(".eventTitle").textContent.toLowerCase();
      var location = item.querySelector("#location").textContent.toLowerCase();
      
      if (title.includes(search) ||  location.includes(search)){
        
        const resultContainer = document.querySelector(".result-list");
        const result = document.createElement("li");
        const link = document.createElement("a");
        link.innerHTML = title.toUpperCase();
        result.setAttribute("is", item.id);
        link.setAttribute("href", "eventDetails.html");
        result.appendChild(link);
        resultContainer.appendChild(result);
      }
      
    })
  }
  else {
    container.style.display = "none";
  }

  if (!resultContainer.hasChildNodes()) {
    const resultContainer = document.querySelector(".result-list");
    const result = document.createElement("p");
    result.innerHTML = "No results found";
    resultContainer.appendChild(result);
  }
  
  var allResults = document.querySelectorAll(".result-list li");
  allResults.forEach(item => {
  item.addEventListener("click", function() {
    var id = item.getAttribute("is");
    var event = document.getElementById(id);
    // event.scrollIntoView({
    //   behavior: "smooth",
    //   alignTop: true
    // });

    localStorage.eventId = id;
  })
});

});


