const app = require('./config/server');
const convert = require('./src/convert');

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/generatepdf', function(req, res) {
    convert(req.body.nomepdf, req.body.htmlpdf);
    res.send(`O arquivo ${req.body.nomepdf}.pdf foi gerado com sucesso na pasta pdf!`);
});