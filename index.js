
const express = require('express'); 
const app = express(); 
const data = require('./data/data');

/** allows you to serve static content **/
app.use(express.static('./public')); 
app.use('/images', express.static('images'));

/** Default route for index **/ 
app.get('/', (req, res) => {
  res.json(data);
}); 

/** this is a route **/ 
app.get('/item/:id', (req, res) => {
  console.log(req.params.id); 
  let user = Number(req.params.id);
  console.log(user); 
  console.log(data[user]);
  res.send(data[user]);
  next();
}, (req, res) => 
  console.log('Did you get the right data?')
);

/** 
 * check out www.expressjs.com/en/guide for routing method(s)
 * res.download('images/melissa.jpg')
 * res.redirect('http://youtube.com');
 * res.end();
*/
app.route('/item') 
  .get((req, res) => {
    res.send('A get request to /item')
   }) 
  .post((req, res) => {
    res.send('a post request for new item');
  })
  .put((req, res) => {
    res.send('a put request for new item');
  })
  .delete((req, res) => {
    res.send('a delete request for new item');
}); 

/** Server stuff. **/ 
const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(data);
}); 
