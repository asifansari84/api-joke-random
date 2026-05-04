const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random'
const options = { method: 'GET', headers: { accept: 'application/json' } }

const jokeText = document.getElementById('joke-text')
const jokeButton = document.getElementById('next-btn')

jokeButton.addEventListener('click', () => {
	getJoke()
})

async function getJoke() {
	try {
		const response = await fetch(url, options)
		const data = await response.json()
		const joke = data.data.content
		jokeText.textContent = joke
	} catch (error) {
		console.error('Error:', error)
	}
}

// inital joke
getJoke()
