import axios from 'axios';


axios.post('/login', {
  params: {
    email: 12345,
    password: "DISJDI",
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});  

class logonService {
  constructor({ url = 'http://localhost:3000/login', timeout = 30000 }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}


class userService {
  
}


export default CharactersService;
