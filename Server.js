const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./controllers');
const sequelize = require('./config/connection');
const { url } = require('inspector');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3306;

// Data to connect API to server.js
function getAPIUrl() {
    let url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json";
    return url;
}

//similar to a console.log
const sessionStore = new SequelizeStore({
    db: sequelize,
});

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
        // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
        maxAge: 3600,
        // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
        httpOnly: true,
        // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
        secure: false,
        // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

