const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3306;

//Data to connect API to server.js
function getAPIUrl() {
    let url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json";
    return url;
}

function fetchData(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.data["results"];
        })
        .then(function (results) {
            setHTML(results);
        });
}

function fetchSuggestions(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.data["results"];
        })
        .then(function (results) {
            suggestionData = results;
        });
}
fetchData(getAPIUrl())
//similar to a console.log