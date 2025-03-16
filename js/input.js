export function sanitizeInput(input) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
}

export function updateCommentInput(comment, commentInput) {
    commentInput.value = `> ${comment.name}: "${comment.text}"\n Ответ: `
}
