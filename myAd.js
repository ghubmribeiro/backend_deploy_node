const db = require('mongoose');

const Ad = new db.Schema(
    {
        Title:{
            type: String,
            required: true,
        },
        Url:{
            type: String,
            required: true,
        },
        Image:{
            type: String,
            required: true,
        },
    },
);

module.exports = db.model("Ad", Ad);