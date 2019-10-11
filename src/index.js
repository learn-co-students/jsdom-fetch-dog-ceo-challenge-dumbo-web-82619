console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(json => {
        
        
        let dogs = json.message
        let images = document.getElementById("dog-image-container")
        // let dogPicUL = document.createElement("ul")
        // images.innerHTML += `<ul><img src="${json.message}" alt="dog" /></ul>`
        dogs.forEach(function(dog) { 
            images.innerHTML += `<li><img src="${dog}" alt="dog" /></li>`  
        })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {

        let breeds = Object.keys(json.message)
        let breedListUL = document.getElementById("dog-breeds")
        breeds.forEach(function(breed) {
            breedListUL.innerHTML += `<li> ${breed} </li>`
        })
        
        breedListUL.addEventListener("click", function(evt) {
            if (evt.target.tagName === "LI") {
                evt.target.style.color = "red"
            }
        })

        let breedMenu = document.getElementById("breed-dropdown")
        breedMenu.addEventListener("change", function(evt) {
            

                let breeds = Object.keys(json.message)
                let result = breeds.filter(breed => {
                     return breed.startsWith(evt.target.value)})

                    breedListUL.innerHTML = ""


                 result.forEach(function(breed) {
                    breedListUL.innerHTML += `<li>  ${breed} </li>`})

                    
                 

                })


        
        })

        
 })  




