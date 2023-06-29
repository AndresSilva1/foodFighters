const randomstring = require('randomstring');
const sequelize = require('../../config/connection');

// Generate a random string of a specified length
const randomString = randomstring.generate(16); // 16 characters long
console.log(randomString);

module.exports = sequelize;