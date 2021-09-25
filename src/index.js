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
            let dropdown = document.querySelector('#breed-dropdown')
            console.log(li)
            // let filter = li.filter(element => {
            //     if (element.charAt(0) === 'a') {
            //         return element.startWith('a')
            //     } else if (element.charAt(0) === 'b') {
            //         return element.startWith('b')
            //     } else if (element.charAt(0) === 'c') {
            //         return element.startWith('c')
            //     } else if (element.charAt(0) === 'd') {
            //         return element.startWith('d')
            //     }
            // })
            // dropdown.append(filter)
            li.addEventListener('click', () => {
                li.style.color = 'blue'
            })
            ulTag.append(li)
        }
    })
})