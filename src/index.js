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