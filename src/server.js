const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();

const weatherData = require("../utils/weatherData");

const PORT = process.env.PORT || 3000;

const publicStaticDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials | (partialsPath);
app.use(express.static(publicStaticDirPath));

app.get('', (req, res) => {
    res.render("index", {
        title: "Weather Forecast App"
    })
});

//localhost:3000/weather?address =amsterdam
app.get('/weather', (req, res) => {
    const address = req.query.address;

    if (!address) {
        return res.send({
            error: "You should write city name in search text box "
        })
    }

    weatherData(address, (error, msg = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        console.log(`msg is`);
        console.log(msg);
        res.send(msg)
    
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: "page not found"
    })
});

app.listen(PORT, () => console.log(`My app listening on port ${PORT}! `));