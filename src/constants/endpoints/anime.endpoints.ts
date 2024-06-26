export const AnimeEndpoints = {
	animeFullById: '/anime/{id}/full',
	animeById: '/anime/{id}',
	animeCharacters: '/anime/{id}/characters',
	animeStaff: '/anime/{id}/staff',
	animeEpisodes: '/anime/{id}/episodes',
	animeEpisodeById: '/anime/{id}/episodes/{episode}',
	animeNews: '/anime/{id}/news',
	animeForum: '/anime/{id}/forum',
	animeVideos: '/anime/{id}/videos',
	animeVideosEpisodes: '/anime/{id}/videos/episodes',
	animePictures: '/anime/{id}/pictures',
	animeStatistics: '/anime/{id}/statistics',
	animeMoreInfo: '/anime/{id}/moreinfo',
	animeRecommendations: '/anime/{id}/recommendations',
	animeUserUpdates: '/anime/{id}/userupdates',
	animeReviews: '/anime/{id}/reviews',
	animeRelations: '/anime/{id}/relations',
	animeThemes: '/anime/{id}/themes',
	animeExternal: '/anime/{id}/external',
	animeStreaming: '/anime/{id}/streaming',
	animeSearch: '/anime'
} as const
