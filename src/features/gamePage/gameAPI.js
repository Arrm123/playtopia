// A mock function to mimic making an async request for data
export async function getGames() {
  const url = 'https://mmo-games.p.rapidapi.com/games';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88472d8308msh2af82ac405f489ap1393b8jsn8ac131210704',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}