const axios = require('axios');
const url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json"
async function testing() {
    try {
        const result = await axios.get(url);
        console.log(result)
    } catch (err) {
        console.log(err);
    }
}

testing();