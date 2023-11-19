export const transformGameFromAPIViewToAppView = (gameFromAPI) => {
	return {
		id: gameFromAPI.id,
		title: gameFromAPI.title,
		releaseDate: formatDate(gameFromAPI.release_date),
		publisher: gameFromAPI.publisher,
		genre: gameFromAPI.genre,
		thumbnail: gameFromAPI.thumbnail,
		developer: gameFromAPI.developer,
		screenshots: gameFromAPI.screenshots,
		minSystemRequirements: gameFromAPI.minimum_system_requirements,
		gameUrl: gameFromAPI.game_url
	}
}

export const transformGamePreviewsFromAPIViewToAppView = (gamePreviewsFromAPI) => {
	return gamePreviewsFromAPI.map(gamePreviewFromAPI => ({
		id: gamePreviewFromAPI.id,
		title: gamePreviewFromAPI.title,
		releaseDate: formatDate(gamePreviewFromAPI.release_date),
		publisher: gamePreviewFromAPI.publisher,
		genre: gamePreviewFromAPI.genre,
		thumbnail: gamePreviewFromAPI.thumbnail,
	}))
}

export const formatDate = (dateString) => {
	const date = new Date(dateString)
	const leftPart = date.toLocaleString('ru', { month: 'long', day: 'numeric' })
	const rightPart = date.toLocaleString('ru', { year: 'numeric' })

	return leftPart + ', ' + rightPart
}