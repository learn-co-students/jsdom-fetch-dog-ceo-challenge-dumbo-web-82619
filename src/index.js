console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
    let dogBreedsUL = document.querySelector("#dog-breeds")
    let breedLetterDropdown = document.querySelector("#breed-dropdown")
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(resjson => {
        let listOfDogs = resjson.message
        let dogImages = document.querySelector("#dog-image-container")
        
        listOfDogs.forEach(function(dog){
            dogImages.innerHTML += `<ul><img src="${dog}" alt="good dog "/></ul>`
        })
        
    })
    
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(resjson => {
        let breeds = Object.keys(resjson.message)
        breeds.forEach(function(breed){
            dogBreedsUL.innerHTML += `<li id="breeds">${breed}</li>`
            
        })
        
    })
    
    
    dogBreedsUL.addEventListener("click",function(evt){
        
        if(evt.target.tagName ==="LI"){
            evt.target.style.color="red";
        }
        
    })
    
    breedLetterDropdown.addEventListener("change",function(evt){
        let alphaBet = ["a","b","c","d"]
        alphaBet.forEach(function(letter){
            if(evt.target.value === letter){
                let dogBreeds = Array.from(document.querySelectorAll("#breeds"))

               dogBreeds.forEach(function(bred){
                let breedInnerTextArray = Array.from(bred.innerText)
                    if(breedInnerTextArray[0] === letter){
                        


                    }



                 console.log(breedInnerTextArray[0])

               })
                
                console.log(dogBreeds)
                
                
                
                
            }

        })


        
        
    })
    
})

