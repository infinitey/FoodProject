//authorization code 6274e8d8da724e9cb56231308c55ef30
export default class APIClient {
  createFormBody(grantType, clientId, clientSecret, code, redirectUri) {
    const body = {
      'grant_type' : grantType,
      'client_id' : clientId,
      'client_secret': clientSecret,
      'code' : code,
      'redirect_uri' : redirectUri,
    }

    var formBody = []
    for (var property in body) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(body[property])
      formBody.push(encodedKey+"="+encodedValue)
    }

    console.log(formBody)

    return formBody
  }

  loginAPICall = (grantType, clientId, clientSecret, code, redirectUri) => {
    console.log('fetching')
    fetch('https://www.sandbox.arcadier.io/token/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: this.createFormBody(grantType, clientId, clientSecret, code, redirectUri)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.warn(error);
      })
  }

}

// https://www.sandbox.arcadier.io/token/grant_type=authorization_code&client_id=sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d&client_secret=C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw&code=6274e8d8da724e9cb56231308c55ef30&redirect_uri=http://localhost:8080/apitoken
