import { getGamesFromAPI } from "./api.mjs"
import { transformGamePreviewsFromAPIViewToAppView } from "./formatData.mjs"

export const getPreparedGames = async (params) => {
  const platform = params.get("platform") || "";
  const tag = params.get("tag") || "";
  const sort = params.get("sort-by") || "";

  const gamesFromAPI = await getGamesFromAPI({ platform, tag, sort });

  if (gamesFromAPI === null) return null

  const transformedGames = transformGamePreviewsFromAPIViewToAppView(gamesFromAPI);
  const preparedGames = JSON.stringify(transformedGames)

  return preparedGames;    
}