const axios = require('axios');

async function testing(cityName) {
    try {

        const result = await axios.get(`https://controllerdata.lacity.org/resource/v2mg-qsxf.json?city=${cityName}`);
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = testing