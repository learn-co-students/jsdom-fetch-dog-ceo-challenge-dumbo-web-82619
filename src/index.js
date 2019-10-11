console.log("%c HI", "color: firebrick");

/* challenge 1 */
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let imgContainer = document.querySelector("#dog-image-container");

fetch(imgUrl)
  .then(res => res.json())
  .then(jsonObj => {
    let imgArr = jsonObj.message;
    imgArr.forEach(element => {
      imgContainer.innerHTML += `<img src="${element}" />`;
    });
  });


/* challenge 2 */
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedUL = document.querySelector("#dog-breeds");
let breedArray = []

fetch(breedUrl)
  .then(res => res.json())
  .then(jsonObj => {
    let breedObj = Object.keys(jsonObj.message);
    // console.log(breedObj) ["adhoef","asenf"...]
    breedArray = breedObj;
    breedArray.forEach(element => {
      addLI(element)
    });
  });

function addLI(element) {
  let li = document.createElement("li")
  li.append(element)
  breedUL.append(li)
}


/* challenge 3 */
breedUL.addEventListener("click", changeColor);

function changeColor(evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.add("red");
  }
}


/* challenge 4 */
let breedDropdown = document.querySelector("#breed-dropdown")
breedDropdown.addEventListener("change", (evt) => {
  let choice = evt.target.value
  let showingArray = breedArray.filter((element) => {
    return element.startsWith(choice)
  })
  breedUL.innerHTML = ""
  showingArray.forEach(element => {
    addLI(element)
  });
});

