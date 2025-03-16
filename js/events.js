import { comments } from './comments.js'
import { renderComments } from './render.js'
import { sanitizeInput, updateCommentInput } from './input.js'

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

        const now = new Date()
        const day = String(now.getDate()).padStart(2, '0')
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const year = String(now.getFullYear()).slice(2)
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`

        comments.push({
            name: name,
            date: formattedDate,
            text: comment,
            likes: 0,
            liked: false,
        })

        updateCommentInput({ name: name, text: comment }, commentInput)

        nameInput.value = ''
        commentInput.value = ''
        renderComments(commentsList)
    })
}
