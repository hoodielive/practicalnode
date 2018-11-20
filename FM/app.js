const express = require('express'); 
const app = express();
const apiRouter = express.Router();

app.use('/', apiRouter);

app.get('/', (req, res) => {
    res.json({ ok: true });
});

apiRouter.get('/api', (req, res) => {
    res.json({ api: "access the api now from apiRouter"});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Hanging out on port ${port}`));
