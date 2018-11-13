const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
  res.send('Howdy') 
}); 

app.get('/yo', (req, res) => {
  res.send('Whats gup homey?'); 
}); 

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}`))
