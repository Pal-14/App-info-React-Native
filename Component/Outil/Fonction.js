const key =  `0963fe2eb42147a8a00eea4752228720`
const serverUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0963fe2eb42147a8a00eea4752228720`


function getDataApi(setDataApi) {
  fetch(`${serverUrl}`
  )
    .then((response) => {
      return response.json();
    })
    .then((responseObject) => {
      setDataApi(responseObject);
      console.log("dataApi", responseObject);
    });
}

module.exports = {
  getDataApi,
};

