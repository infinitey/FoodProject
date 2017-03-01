//authorization code 6274e8d8da724e9cb56231308c55ef30
class Api {
  fetch('https://www.sandbox.arcadier.io/token/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',  //application/x-www-form-urlencoded
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: 'sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d',
      client_secret: 'C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw',
      code: '6274e8d8da724e9cb56231308c55ef30',
      redirect_uri: 'http://localhost:8080/apitoken',
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
    console.warn(error);
  });

}

export class Api

// https://www.sandbox.arcadier.io/token/grant_type=authorization_code&client_id=sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d&client_secret=C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw&code=6274e8d8da724e9cb56231308c55ef30&redirect_uri=http://localhost:8080/apitoken
