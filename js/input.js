export function sanitizeInput(input) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
}

export function updateCommentInput(comment, commentInput) {
    commentInput.value = `> ${comment.name}: «${comment.text}»\n Ответ: `
}

export function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, interval)
    })
}
