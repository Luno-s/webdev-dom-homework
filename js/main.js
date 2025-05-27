import { renderComments } from './render.js'
import { addEventListeners } from './events.js'
import { fetchComments } from './api.js'

const nameInput = document.querySelector('.add-form-name')
const commentInput = document.querySelector('.add-form-text')
const addButton = document.querySelector('.add-form-button')
const commentsList = document.querySelector('.comments')

document.addEventListener('DOMContentLoaded', () => {
    fetchComments().then(() => {
        renderComments(commentsList)
        addEventListeners(commentsList, commentInput, nameInput, addButton)
    })
})

window.onload = function () {
    document.body.classList.add('loaded_hiding')
    window.setTimeout(function () {
        document.body.classList.add('loaded')
        document.body.classList.remove('loaded_hiding')
    }, 500)
}

console.log('It works!')
