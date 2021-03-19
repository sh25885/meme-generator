document.querySelector(".searchButton").addEventLister("click", function () {
    var inputValue = document.querySelector(".searchInput").value;
    var userInput = getUserInput();
    searchImage(userInput);
});

document.querySelector(".searchInput").addEventListener("keyup", function (e) {
    //enter key pressed
    if (e.which === 13) {
        var userInput = getUserInput();
        searchImage(userInput);    
    }
});

function getUserInput() {
    var inputValue = document.querySelector(".searchInput").value;
    return inputValue;
}

function searchImage(searchQuery){
    var imageUrl = "https://www.shutterstock.com/search/" + searchQuery;
    var AJAXCall = new XMLHttpRequest(); 
    AJAXCall.open("GET", imageUrl); 
    AJAXCall.send(); 
    
    AJAXCall.addEventListener("load", function (data) { 
      var actualData = data.target.response; 
      pushToDOM(actualData); 
      console.log(actualData); 
        
    }); 
}

function pushToDOM(response) { 
  
  // Turn response into real JavaScript object 
  response = JSON.parse(response); 
    
  // Drill down to the data array 
  var images = response.data; 
  
  // Find the container to hold the response in DOM 
  var container = document.querySelector(".container"); 
    
  // Clear the old content since this function  
  // will be used on every search that we want 
  // to reset the div 
  container.innerHTML = ""; 
  
  // Loop through data array and add IMG html 
  images.forEach(function (image) { 
  
    // Find image src 
    var src = image.images.imageUrl; 
  
    // Concatenate a new IMG tag 
    container.innerHTML += "<img src='" + src + "' class='container' />";
  }); 
}