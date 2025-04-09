import { comments } from './comments.js'

export function renderComments(commentsList) {
    commentsList.innerHTML = ''
    comments.forEach((comment, index) => {
        const likeClass = comment.liked
            ? 'like-button -active-like'
            : 'like-button'
        const newComment = `
        <li class="comment" data-index="${index}">
            <div class="comment-header">
                <div>${comment.author.name}</div>
                <div>${new Date(comment.date).toLocaleString('ru-RU')}</div>
            </div>
            <div class="comment-body">
                <div class="comment-text">${comment.text}</div>
            </div>
            <div class="comment-footer">
                <div class="likes">
                    <span class="likes-counter">${comment.likes}</span>
                    <button class="${likeClass}" data-index="${index}"></button>
                </div>
            </div>
        </li>
        `
        commentsList.innerHTML += newComment
    })
}
