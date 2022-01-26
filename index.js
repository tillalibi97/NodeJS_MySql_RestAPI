const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const programmingLanguagesRouter = require('./routes/programmingLanguages');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
})

app.use('/programming-languages', programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});


    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

/*
 fetch(
 'http://localhost:3000/programming-languages',
 {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name":"dart", "released_year": 2011, "githut_rank": 13, "pypl_rank": 20, "tiobe_rank": 25})
  }
 ).then(resp => resp.text()).then(console.log)
 */