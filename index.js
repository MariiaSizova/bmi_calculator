const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/html', express.static(__dirname + 'public/html'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post("/", function (req, res) {
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    heigh = heigh / 100;
    bmi = weigh / (heigh * heigh);
 
    bmi = bmi.toFixed();

    if (bmi < 19) {
        res.sendFile(__dirname + '/public/html/cat1.html');
    } else if (19 <= bmi && bmi < 25) {
        res.sendFile(__dirname + '/public/html/cat2.html');
    } else if (25 <= bmi && bmi < 30) {
        res.sendFile(__dirname + '/public/html/cat3.html');
    } else if (bmi >= 30) {
        res.sendFile(__dirname + '/public/html/cat4.html');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});


app.listen(port, () => console.log('Server is listening in port ' + port))

module.exports = app;