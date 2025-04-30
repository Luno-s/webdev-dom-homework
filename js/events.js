import { comments } from './comments.js'
import { renderComments } from './render.js'
import { sanitizeInput, updateCommentInput } from './input.js'
import { addComments, fetchComments } from './api.js'

export function addEventListeners(
    commentsList,
    commentInput,
    nameInput,
    addButton,
) {
    commentsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('like-button')) {
            const index = event.target.getAttribute('data-index')
            comments[index].liked = !comments[index].liked
            comments[index].likes += comments[index].liked ? 1 : -1
            renderComments(commentsList)
        } else if (event.target.closest('.comment')) {
            const commentElement = event.target.closest('.comment')
            const index = parseInt(
                commentElement.getAttribute('data-index'),
                10,
            )
            const comment = comments[index]
            updateCommentInput(comment, commentInput)
        }
    })

    addButton.addEventListener('click', () => {
        const name = sanitizeInput(nameInput.value.trim())
        const comment = sanitizeInput(commentInput.value.trim())

        if (!name || !comment) {
            alert('Пожалуйста, введите ваше имя и комментарий.')
            return
        }
        addComments(name, comment)
            .then(() => {
                updateCommentInput({ name: name, text: comment }, commentInput)
                nameInput.value = ''
                commentInput.value = ''
                return fetchComments()
            })
            .then(() => {
                renderComments(commentsList)
            })
    })
}
