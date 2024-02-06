fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://webhook.site/d5c2d46d-88cd-4046-88b0-ef84b1511227'))
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
