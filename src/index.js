console.log('%c HI', 'color: firebrick')
// Dog Pictures
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(resObj => {

let dogDiv = document.getElementById("dog-image-container")

function addMessageToSrc(message){    
    let dogImg = document.createElement("img")
    dogImg.src = message
    dogDiv.append(dogImg)
}
// console.log(resObj)
resObj.message.forEach(addMessageToSrc)
})

// Dog Breeds

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(resObj => {

    // console.log(resObj.message)
let dogBreedsUL = document.getElementById("dog-breeds")

function addMessageToLI(message){    
    let dogBreedLI = document.createElement("li")
    dogBreedLI.innerText = message
    dogBreedsUL.append(dogBreedLI)
    dogBreedLI.addEventListener("click", function(event){
        event.target.style.color = 'blue'
        // console.log(event.target)
    })
}
let breedList = Object.keys(resObj.message).forEach(addMessageToLI)

let breedDropdown = document.getElementById("breed-dropdown")

breedDropdown.addEventListener("change", function(event){
    // if changed to a, only show breeds starting with "a"
    if(event.target.value === "a"){
        
    }

    function breedsStartsWith(letter){
        letter 
    }
})

})

