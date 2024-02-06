fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://webhook.site/dfedaf69-81fd-4eda-b447-d0bace36ee82'))
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
