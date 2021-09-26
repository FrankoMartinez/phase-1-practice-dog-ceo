console.log('%c HI', 'color: firebrick')

 document.addEventListener('DOMContentLoaded', () => {
    let divTag = document.querySelector('#dog-image-container')
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(e => {
        e.message.forEach(element => {
            let img = document.createElement('img')
            img.src = element
            divTag.append(img)
        });
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let ulTag = document.querySelector('ul#dog-breeds')
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(e => {
        for(const dog in e.message) {
            let li = document.createElement('li')
            li.innerHTML = dog
            li.addEventListener('click', () => {
                li.style.color = 'blue'
            })
            ulTag.append(li)
        }
    })
    let dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener("change", (e) => {
        renderNewList(e.target.value)
    })
    function renderNewList(letter) {
        let ulTag = document.querySelector('ul#dog-breeds')
        ulTag.innerHTML = ""
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(e => {
        let breedsArray = Object.keys(e.message)
        let filteredBreeds = breedsArray.filter(breed => breed.charAt(0) === letter)
        filteredBreeds.forEach(breed => {
            let li = document.createElement('li')
            li.innerHTML = breed
            li.addEventListener('click', () => {
                li.style.color = 'blue'
            })
            ulTag.append(li)
        })
    })
    }
})