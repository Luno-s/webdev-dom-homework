import { renderComments } from './render.js'
import { addEventListeners } from './events.js'

const nameInput = document.querySelector('.add-form-name')
const commentInput = document.querySelector('.add-form-text')
const addButton = document.querySelector('.add-form-button')
const commentsList = document.querySelector('.comments')

document.addEventListener('DOMContentLoaded', () => {
    renderComments(commentsList)
    addEventListeners(commentsList, commentInput, nameInput, addButton)
})

console.log('It works!')
