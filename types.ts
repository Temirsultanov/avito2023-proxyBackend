export type Game_Preview = {
	id: number
	title: string
	releaseDate: string
	publisher: string
	genre: string
	thumbnail: string
}

export type Game = Game_Preview & {
	developer: string
	screenshots: Screenshot[]
	minSystemRequirements: Min_System_Requirements
	gameUrl: string
}

export type Screenshot = {
	id: number
	image: string
}

export type Min_System_Requirements = {
	graphics: string
	memory: string
	os: string
	processor: string
	storage: string
}

export type Game_From_API = {
	id: number
	title: string
	release_date: string
	publisher: string
	genre: string
	thumbnail: string
	developer: string
	screenshots: Screenshot[]
	minimum_system_requirements: Min_System_Requirements
	description: string
	freetogame_profile_url: string
	game_url: string
	platform: string
	short_description: string
	status: string
}

export type Game_Preview_From_API = {
	id: number
	developer: string
	freetogame_profile_url: string
	genre: string
	platform: string
	publisher: string
	release_date: string
	short_description: string
	thumbnail: string
	title: string
}
