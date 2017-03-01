var api = {
  getRovers() {
    var url= 'https://api.nasa.gov/planetary/apod?api_key=WehMnaeJOzukdjulGCO0JWthpL10kIjGYw0WPXso'
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
