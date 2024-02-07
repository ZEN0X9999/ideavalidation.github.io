console.log("WERE IN");

fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://webhook.site/d5c2d46d-88cd-4046-88b0-ef84b1511227'), {
  headers: {
    'X-Custom-Header': 'test1'
  }
})




