fetch('https://iplogger.com/2KWVg4')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handle the JSON response data here
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });
