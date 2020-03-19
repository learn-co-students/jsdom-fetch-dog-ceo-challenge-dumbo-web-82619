let breed = []

// document will load the HTML first and then perform what is in the anonymous function below
document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreedOptions();
});

// will fetch the JSON of the API URL and then add the image for each dog image url in JSON message
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res=> res.json())
    .then(results => results.message.forEach(image => addImage(image)));
}

// helper method 
// will find the container with ID dog-image-container
// will create a new image element and set the src attribute to the dog image url 
// will append the new image element to the container  
function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageElement = document.createElement('img');
    newImageElement.src = dogPicUrl;
    container.appendChild(newImageElement);
}

// will fetch the JSON of the API URL and then store the keys of the JSON (hash) into global array 'breed'
// will update the breed list with use of helper method
// will add the breed selector listener functionality
function loadBreedOptions() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
    })
}

// helper method
// will remove all children of ul element with ID 'dog-breeds', if there are any
// will add into this ul element each breed in the 'breeds' array
function updateBreedList(breeds) {
    let ul = document.querySelector("#dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

// helper method
// will remove all children of the element passed in
function removeChildren(element) {
    // lastElementChild method will return the object's last child or null if no children
    let child = element.lastElementChild;
    while (child) {
        // removeChild method removes a child node from the DOM and returns the removed node
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

// helper method
// will create an li element which will hold breed (passed in as argument) 
// define the style.cursor attribute as 'pointer' (optional)
// append this new li element to existing ul element 
// add an event listener that calls 'updateColor' method when li element is clicked
function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

// helper method
// set style.color attribute to a color when event (passed in) is targeted
function updateColor(event) {
    event.target.style.color = 'palevioletred';
}

// will get the element with ID 'breed-dropdown'
// will add an event listener to this dropdown and, when there is a change, 
// will select the breeds that start with the selected option value of the dropdown (aka event.target.value)
function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}

// helper method
// will update the breed list to filter the 'breeds' array by only showing a breed if it starts with the letter passed in
function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}


// // OLD WAY (wrong?): 
// document.addEventListener("DOMContentLoaded", function(){

//     // define the HTML container where we want to add the dog images
//     const dogImageContainer = document.querySelector("#dog-image-container")
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     const ulContainer = document.querySelector("#dog-breeds")
//     const dropdown = document.querySelector("#breed-dropdown")

//     // start fetching from a API address (defined above)
//     fetch(imgUrl)
//     // get the box without the key
//     .then(res => res.json())
//     // get the key to open the box which allows us to use the data stored in the json.message
//     .then(json => {
//         dogs = json.message
//         // iterating through the dogs array
//         dogs.forEach(function(dog){
//             // create an image tag for each dog
//             imgElement = document.createElement("img")
//             // set the src and alt attributes of img tag to the dog url
//             imgElement.src = dog
//             imgElement.alt = "dog image"
//             // append each img tag with the dog url to the HTML container
//             dogImageContainer.append(imgElement)
//         })
//     })

//     fetch(breedUrl)
//     .then(res => res.json())
//     .then(json => {
//         // we are getting the keys from the breeds hash and assigning it to 'breeds'
//         breeds = Object.keys(json.message)
//         // iterating through the breeds array
//         breeds.forEach(function(breed){
//             // for each breed, create an li element 
//             liElement = document.createElement("li")
//             // add the breed name as inner text for its li element
//             liElement.innerText = breed
//             // add an event listener for the new li element where, when clicked, changes the color of the style to red

//             // liElement.addEventListener("click", function(evt){
//             //     evt.target.style.color = 'red'
//             // })

//             // OR second way below using arrow function
//             liElement.addEventListener("click", evt => evt.target.style.color = 'red')
//             // append the li element to the ul container
//             ulContainer.append(liElement)
//         })
//     })

//     dropdown.addEventListener("change", function(evt){
//         const choices = document.querySelectorAll("#breed-dropdown")
//         // debugger
//         choices.addEventListener("change")
//     })

// })