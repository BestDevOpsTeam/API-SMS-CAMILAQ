const express = require("express")
const bodyParser = require('body-parser');
const HTTP_PORT = 3001;
const app = express();
const sms = require('./sms.js');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.disable("x-powered-by");
app.use(bodyParser.json());
app.get("/api/v1/health", async (req, res, next) => {
    res.json({
        "message": "Ok",
        "server": "UP"
    })
});

app.post("/api/v1/sms", async (req, res, next) => {
    const body = req.body;
    const {
        celular,
    } = body;
    const smsResponse = await sms(celular);
    if (smsResponse == null || smsResponse == undefined || smsResponse.status == 'error') {
        res.status(500).json(smsResponse)
    } else {
        res.status(200).json(smsResponse)
    }
});

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

module.exports = app;