import { getGameByIdFromAPI } from "./api.mjs"
import { transformGameFromAPIViewToAppView } from "./formatData.mjs"

export const getPreparedGameById = async (params) => {
  const id = params.get("id");

  const gameFromAPI = await getGameByIdFromAPI(id);

  if (gameFromAPI === null) return null
  
  const transformedGame = transformGameFromAPIViewToAppView(gameFromAPI);
  const preparedGame = JSON.stringify(transformedGame)
  
  return preparedGame;
}