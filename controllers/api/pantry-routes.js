const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json"
        const result = await axios.get(url);
        console.log(result)
        res.json(result)
    } catch (err) {
        console.log(err);
    }
})
