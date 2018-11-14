
const express = require('express'); 
const app = express(); 
const data = require('./data/data');

/** allows you to serve static content **/
app.use(express.static('./public')); 
app.use('/images', express.static('images'));
app.use(express.json());  // { "hello": "JSON is cool" }; 
app.use(express.urlencoded( { extend: true }));  // hello=URLEncoded+is+cool

/** Default route for index **/ 
app.get('/', (req, res) => {
  res.json(data);
}); 

app.post('/newItem', (req, res) => {
  console.log(req.body);
  res.send(req.body); 
}); 

/** this is a route **/ 
app.get('/item/:id', (req, res, next) => {
  // this is the middleware that pulls the data 
  console.log(req.params.id); 
  let user = Number(req.params.id);
  console.log(user); 
  console.log(data[user]);
  console.log(`Request from: ${req.originalUrl}`); 
  console.log(`Request type: ${req.method}`); 
  /** 
   * middleware that uses the req object 
   * everything above is middleware
  */
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
    throw new Error(); 
    //res.send('A get request to /item')
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

/** Error Handling */
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send(`Red alert! Red alert: ${err.stack}`); 
}); 
/** Server stuff. **/ 
const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(data);
}); 
