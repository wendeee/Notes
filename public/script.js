const title = document.querySelector('#title')
const description = document.querySelector("#description")
const btn = document.querySelector(".btn")
const heroImage = document.querySelector('.center-text')
const form1 = document.getElementById('form1')
const cardContainer = document.querySelector('.card-container');
const footer = document.querySelector('.footer')
const main = document.querySelector('.main-class')

description.addEventListener('click', () => {
    title.style.display = 'block'
    button.style.display = 'block'
    title.autofocus = true
})


function displayFooter(){
    footer.style.display = 'flex'
}
function hideFooter(){
    footer.style.display = 'none'
}

//****************** MAKE API CALL TO BACKEND **********************//

function deleteNote(){
    fetch('/api/v1/notes/' + id),{
        method: 'DELETE'
    }
}