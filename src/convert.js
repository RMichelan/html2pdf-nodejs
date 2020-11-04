var pdf = require('html-pdf');

function convert(pdfName, htmlpdf) {
    pdf.create(htmlpdf, {}).toFile(`./pdf/${pdfName}.pdf`, (err, res) => {
        if(err) {
            console.log(`Erro: ${err}`);
        } else {
            return res;
        }
    });
}

module.exports = convert;