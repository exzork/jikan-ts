import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { TopClient } from '../clients'
import {
	type Anime,
	AnimeStatus,
	type AnimeTopParams,
	type JikanResponse,
	type Manga,
	MangaStatus,
	type MangaTopParams,
	TopAnimeFilter,
	TopMangaFilter
} from '../models'

describe('test Top Client', () => {
	let client: TopClient
	beforeAll(() => {
		client = new TopClient()
	})
	beforeEach(async () => {
		await new Promise(resolve => setTimeout(resolve, 1000))
	})

	it('should get top animes filtered by params', async () => {
		const params: AnimeTopParams = { limit: 3, filter: 'airing' }
		const data = await client
			.getTopAnime(params)
			.then((response: JikanResponse<Anime[]>) => response.data)

		expect(data).toHaveLength(3)
		for (const anime of data) {
			expect(anime.status).toBe('Currently Airing')
		}
	})

	it('should get top mangas filtered by params', async () => {
		const params: Partial<MangaTopParams> = {
			limit: 3,
			filter: 'publishing'
		}
		const data = await client
			.getTopManga(params)
			.then((response: JikanResponse<Manga[]>) => response.data)

		expect(data).toHaveLength(3)
		for (const manga of data) {
			expect(manga.status).toBe('Publishing')
		}
	})
})
