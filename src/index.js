// Code works, but needs major refactors: to be continued...

document.addEventListener('DOMContentLoaded', function() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  const dogImagesDiv = document.querySelector('#dog-image-container')
  const dogBreedsUl = document.querySelector('#dog-breeds')
  const breedDropdownSelect = document.querySelector('#breed-dropdown')

  fetch(imgUrl)
  .then(response => response.json())
  .then(json => {
    const imageSet = json.message
    imageSet.forEach(function(image) {
      const dogImageLi = document.createElement('img')
      dogImageLi.src = image
      dogImageLi.alt = 'Dog'
      dogImagesDiv.append(dogImageLi)
    })
  })

  fetch(breedUrl)
  .then(response => response.json())
  .then(json => {
    const breedList = Object.keys(json.message)
    breedList.forEach(function(breed) {
      const dogBreedLi = document.createElement('li') 
      dogBreedLi.innerText = breed
      dogBreedsUl.append(dogBreedLi)

      breedDropdownSelect.addEventListener('change', function(event) {
        sortedBreedList = breedList.filter(breed => breed.startsWith(event.target.value))
        dogBreedsUl.innerHTML = ""
        sortedBreedList.forEach(function(breed) {
          const dogBreedLi = document.createElement('li') 
          dogBreedLi.innerText = breed
          dogBreedsUl.append(dogBreedLi)
        })
      })
    })
  })
  
  dogBreedsUl.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
      event.target.style.color = 'blue'
    }
  })

// END OF DOMContentLoaded LISTENER  
})





  


 