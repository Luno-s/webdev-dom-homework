import { updateComments } from './comments.js'

export function fetchComments() {
    return fetch('https://wedev-api.sky.pro/api/v1/lina-lunos/comments')
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else if (response.status === 500) {
                throw new Error('Ошибка сервера при получении комментариев.')
            } else {
                throw new Error('Не удалось загрузить комментарии.')
            }
        })
        .then((data) => {
            updateComments(data.comments)
        })
        .catch((error) => {
            if (error instanceof TypeError) {
                alert(
                    'Проблемы с интернет-соединением. Проверьте подключение и попробуйте снова.',
                )
            } else {
                alert(error.message)
            }
        })
}

export function addComments(name, text) {
    return fetch('https://wedev-api.sky.pro/api/v1/lina-lunos/comments', {
        method: 'POST',
        body: JSON.stringify({ name: name, text: text }),
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return response.json().then((errorData) => {
                if (response.status === 400) {
                    const message =
                        errorData.message ||
                        'Имя и комментарий должны содержать как минимум 3 символа.'
                    throw new Error(message)
                } else if (response.status === 500) {
                    throw new Error('Ошибка сервера, попробуйте позже.')
                } else {
                    throw new Error('Что-то пошло не так.')
                }
            })
        }
    })
}
