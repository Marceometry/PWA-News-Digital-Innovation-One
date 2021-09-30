const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const URL = 'https://stormy-brook-79548.herokuapp.com/api'

async function getNews(subject) {
  try {
    const response = await fetch(`${URL}/${subject}`, params)
    return response.json()
  } catch (error) {
    console.error(`Erro na API request:`, '\n', error)
    return null
  }
}

async function getNewsById(subject, id) {
  try {
    const response = await fetch(`${URL}/${subject}/${id}`, params)
    return response.json()
  } catch (error) {
    console.error(`Erro na API request:`, '\n', error)
    return null
  }
}

export default { getNews, getNewsById }
