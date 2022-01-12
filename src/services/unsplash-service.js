export default class UnspashService{
  static async getService(query){
    return fetch(`https://api.unsplash.com/photos/random/?query=${query}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      }) 
  }
}