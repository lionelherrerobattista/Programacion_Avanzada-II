const {connect} = require('mongoose');
const {DB_URI} = require("../utils/config");

const conectarBD = async () => {
    connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    });    
}

conectarBD()
    .then(result => {
        console.log("DB Conectada");
    })
    .catch(err => {
        console.log(err);
    });