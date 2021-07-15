const express = require('express');
const personasRouter = express.Router();
const Persona = require('../models/Persona');
const { verifyToken } = require('../utils/middlewares');

//Para todas las rutas
//personasRouter.use(verifyToken);

//Pongo el middleware como puerta de acceso a la ruta
personasRouter.get("/", verifyToken, (req, res, next) => {
    Persona.find({}).then((personas) => {
        res.json(personas);
    })
    .catch(err => {
        next(err);
    })
 });
 
personasRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    Persona.findById(id)
    .then(persona => {
        if(persona){
            res.json(persona); //actua como un return
        }     
        res.status(404).end();
    })
    .catch(err => {
        next(err);
    });
    
});

personasRouter.delete("/:id", (req, res, next) => {
    const id = req.params.id;

    Persona.findByIdAndRemove(id)
    .then(result => {
        if(result){
            res.status(204).end();
        }
        res.status(404).end();
    })
    .catch(err => {
        next(err);
    });
});

personasRouter.post('/', (req, res, next) => {
    const {nombre, edad} = req.body;

    //Construyo una persona
    const nuevaPersona = new Persona({
        nombre,
        edad
    });

    nuevaPersona.save()
    .then(persona => {
        res.json(persona);
    })
    .catch(err => {
        next(err);
    });
});

personasRouter.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const {nombre, edad} = req.body;
    const infoPersona = {};

    //Filtrar por si falta algún dato
    if(nombre) {
        infoPersona.nombre = nombre;
    }
    if(edad) {
        infoPersona.edad = edad;
    }

    Persona.findByIdAndUpdate(id, infoPersona, {new:true})
    .then(personaModificada => {
        if(personaModificada) {
            res.json(personaModificada);
        }
        res.status(400).end();
    })
    .catch(err =>{
        next(err);
    })
});

module.exports = personasRouter;