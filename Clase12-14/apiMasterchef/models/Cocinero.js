const mongoose = require('mongoose');

const {model, Schema} = mongoose;

const cocineroSchema = new Schema({
    nombre:String,
    especialidad:String,
    favorito:Boolean,
    cantidadCapitulos:Number,
});

cocineroSchema.set('toJSON', {
    transform:((document, cocineroToJSON) => {
        cocineroToJSON.id = cocineroToJSON._id.toString();
        delete cocineroToJSON._id;
        delete cocineroToJSON.__v;
    })
});

const Cocinero = model('Cocinero', cocineroSchema);

module.exports = Cocinero;