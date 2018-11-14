
const express = require('express'); 
const app = express(); 
const data = require('./data/data');


/** Default route for index **/ 
app.get('/', (req, res) => {
  res.send(data);
}); 

app.post('/post', (req, res) => {
  res.send('a post request for new item')
}); 

app.put('/put', (req, res) => {
  res.send('a put request for new item')
}); 

app.delete('/del', (req, res) => {
  res.send('a delete request for new item')
}); 

/** Server stuff. **/ 
const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(data);
}); 
