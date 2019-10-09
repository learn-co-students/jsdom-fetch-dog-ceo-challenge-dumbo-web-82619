console.log('%c HI', 'color: firebrick')

let dogPics = document.querySelector('#dog-image-container')
// let breedListUL = document.querySelector("#dog-breeds")

let docBody = document.body

let JSONify = (res) => res.json()
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(JSONify)
    .then(json => {json.message.forEach((img_obj) => {dogPics.innerHTML += `<img src="${img_obj}"/>`})})

    ////////
    let dropDown = document.querySelector('#breed-dropdown')
    
    dropDown.addEventListener("change", (evt) => {
        evt.preventDefault()

        let selection = evt.target.value

        fetch('https://dog.ceo/api/breeds/list/all')
            .then(JSONify)
            .then(dogBreeds => {
                let ogList = document.querySelector("#dog-breeds")
                dogPics.parentNode.removeChild(ogList)
                let breedListUL = document.createElement("ul")
                breedListUL.id = "dog-breeds"
                docBody.append(breedListUL)

                for (let i = 0; i < Object.keys(dogBreeds.message).length; i++){
                    if (Object.keys(dogBreeds.message)[i].charAt(0) === selection){
                        let newBreedLi = document.createElement("li")
                        newBreedLi.innerText = `${Object.keys(dogBreeds.message)[i]}`
                        breedListUL.append(newBreedLi)
                        newBreedLi.addEventListener("click", (evt) => {
                            newBreedLi.style.color = "red"
                        })
                    }
                }
            })   
        }
    )
//////////

   