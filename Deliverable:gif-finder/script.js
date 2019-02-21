//Beneath this comment: Query select your button by grabbing the id of the button element from index.html and store it as a variable.
 var mainButton = document.querySelector("#mainButton");
//Beneath this comment: Query Select your input by grabbing the id of the input element from index.html
var input = document.querySelector("#input");
//Beneath this comment: Code out a click event listener for your button that logs "Button pressed!" to the console when it is clicked 

mainButton.addEventListener("click" ,e =>{
  console.log("Button pressed!")
  var searchInput = input.value
  console.log(searchInput)
  sendApiRequest(searchInput)
})
//Now, inside your event listener create a new variable called searchInput and call the .value method on the input variable you created. 

//Now, below is a function called sendApiRequest(). Call that function in the above button click event with serachInput as it's argument

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below where it says: YOUR_API_KEY_GOES_HERE.
function sendApiRequest(x) {
  //Where Ryan+Gosling is located replace it with x
    fetch("https://api.giphy.com/v1/gifs/search?api_key=l8D7SmnSXkPCXQeOXxaZn3KZdOGi9xv2&q="+x+"&limit=25&offset=0&rating=G&lang=en")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      //Beneath this line: pass the JSON on to the next function. HINT: Call getImageURLfrom() and pass in json as your argument.
    getImageURLfrom(json)
    });
};

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getImageURLfrom(myJSON) {
  //create  a const called imageURL and set it to equal myJSON.data[0].images.original.url 
var imageURL = myJSON.data[Math.floor(Math.random() * 25)].images.original.url
  //console log your imageURL const
  console.log(imageURL)
  //Now call your addImageToScreen function below and pass in your const as it's argument
  addImageToScreen(imageURL)
  
};

  //querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  //Now create a variable called wrapper and querySelect the div with an id of wrapper
  var wrapper = document.querySelector("#wrapper");
  //Next call the .innerHTML method on your wrapper varible and set it equal to the following string "<img src = ''>"
  //Where the single quotes are located concactenate your myURL parameter to the img tag element.
  wrapper.innerHTML = "<img src = '"+myURL+"'>"
};


//
// 
