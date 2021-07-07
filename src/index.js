console.log('%c HI', 'color: firebrick')
let breedUL = document.getElementById("dog-breeds")
let dogUL =  document.getElementById("dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// const breedDropdown = document.getElementById("breed-dropdown")
fetch(imgUrl)
.then(r => r.json())
.then(r => {
    // console.log(r);
    // debugger
    r.message.forEach(url => {
        dogUL.innerHTML += `
         <img src="${url}"/>
        `
    })
})

fetch(breedUrl)
.then(r => r.json())
.then(r => {
    // console.log(r);
   let dogArray = Object.keys(r.message)
   dogArray.forEach( breed => {
    breedUL.innerHTML += `<li>${breed}! </li>  `
   })

})

breedUL.addEventListener('click', event => {
    if(event.target.tagName === "LI"){
        event.target.style.color = "red"
    }
    // debugger



})


// const breedDropdown = document.getElementById("breed-dropdown")
// breedDropdown.addEventListener('change', event => {
//     fetch('https://dog.ceo/api/breeds/list/all')
//     .then(r => r.json())
//     .then(response => {
//         console.log(response);
//        let doggArray  = Object.keys
//     })

// })


let dogSelect = document.getElementById('breed-dropdown')
dogSelect.addEventListener('change', event => {
//   debugger
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(r => r.json())
  .then(response => {
    console.log(response);
    let dogArray = Object.keys(response.message)
    let filteredArray = dogArray.filter(dog =>{
        return dog.startsWith(event.target.value)
    })
    breedUL.innerHTML = ""
        filteredArray.forEach(breed => {
            breedUL.innerHTML += `<li>${breed}</li>`
        })
       

})

})