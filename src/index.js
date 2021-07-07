console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(e)
{

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    let dogtainer = document.querySelector("#dog-image-container")
    fetch(imgUrl)
    .then(res => res.json())
    .then(obj => 
    { 
        obj.message.forEach(function(el)
        {
            let createdDiv = document.createElement("div")
            let createdIMG = document.createElement("img")
            createdIMG.src = el
            createdIMG.clientWidth = 50
            // createdIMG.clientHeight = 'auto'
            createdDiv.append(createdIMG)
            dogtainer.append(createdDiv)
        }) 
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let dogUL = document.querySelector("#dog-breeds")
    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change', function(e)
    {
        // debugger
        let filter = e.target.value
        dogUL.innerHTML = ''
        fetch(breedUrl)
        .then(res => res.json())
        .then(obj => 
        {
            // debugger
            let message = obj.message
            Object.keys(message).forEach(function(el)
            {
                // debugger
                let createdLI = document.createElement("li")
                createdLI.innerText = el
                if(el[0] === filter)
                {
                    dogUL.append(createdLI)
                }

            })
        })
    })
    dogUL.addEventListener('click', function(e)
    {
        if(e.target.style.color === 'red')
        {
            e.target.style.color = 'black'
        }
        else
        {
            e.target.style.color = 'red'
        }
    })

})