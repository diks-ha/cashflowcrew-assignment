const API_URL = import.meta.env.PROD ? 'https://your-backend.onrender.com/api' : '/api'

export const createIdea = async (ideaData) => {
    const response = await fetch(API_URL + '/ideas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideaData),
    })
    if (!response.ok) {
        throw new Error('Failed to create idea')
    }
    return response.json()
}

export default {
    createIdea
}

