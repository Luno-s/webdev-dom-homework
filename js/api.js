import { updateComments } from './comments.js'

export function fetchComments() {
    return fetch('https://wedev-api.sky.pro/api/v1/polina-lunos/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
        })
}

export function addComments(name, text) {
    return fetch('https://wedev-api.sky.pro/api/v1/polina-lunos/comments', {
        method: 'POST',
        body: JSON.stringify({ name: name, text: text }),
    }).then((response) => {
        return response.json()
    })
}
