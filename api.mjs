import * as https from "node:https";
import { URLSearchParams } from "node:url";

const API_URL = "https://free-to-play-games-database.p.rapidapi.com/api/";
const DEFAULT_OPTIONS = {
  headers: {
		'X-RapidAPI-Key': 'ffd7326f5amshf9d6cb46144d417p16ade8jsn6e79b8a78a95',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
	},
}

const getData = async (url) => {
  return new Promise((resolve, reject) => {    
    https.get(url, DEFAULT_OPTIONS, (response) => {
      let chunks = "";
      if (response.statusCode !== 200) reject({ data: null, code: response.statusCode })
  
      response.on("data", chunk => chunks += chunk)
      response.on("end", () => {
        const data = JSON.parse(chunks);
        resolve({ data, error: null })
      })    
    }).on("error", () => {
      reject({ data: null, code: 404 })
    })
  }) 
}

export async function getGamesFromAPI({ platform, tag, sort }) {
  const pathname = tag.includes(".") ? "filter" : "games";
  const params = new URLSearchParams();

  if (tag) {
    if (pathname === "filter") params.append("tag", tag)
    else params.append("category", tag);
  }

  if (platform) params.append("platform", platform);
  if (sort) params.append("sort-by", sort);
  
  let url = API_URL + pathname + "?" + params;

  const response = await getData(url);
  return response.data
}

export async function getGameByIdFromAPI(id) {
  const url = API_URL + "game?id=" + id;

  const response = await getData(url, { id });
  return response.data
}