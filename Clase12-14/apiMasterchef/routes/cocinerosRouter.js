const express = require('express');
const cocinerosRouter = express.Router();
const Cocinero = require('../models/Cocinero');
const { verifyToken } = require('../utils/middlewares');




//Buscar todos
cocinerosRouter.get("/", verifyToken, (req, res) => {
    Cocinero.find({}).then((cocineros) => {
        res.json(cocineros);
    });
});

//Buscar Cocinero
cocinerosRouter.get("/:id", verifyToken, (req, res) => {
    const id = req.params.id;

    console.log(id);
    
    Cocinero.findById(id)
    .then(cocinero => {
        if(cocinero){
            res.json(cocinero);
        }
        res.status(404).end();
    })
    .catch(err => {
        res.status(400).send(err);
    })
});

//Agregar cocinero
cocinerosRouter.post('/', verifyToken, (req, res) => {
    const {nombre, especialidad, favorito, cantidadCapitulos} = req.body;

    if(nombre && especialidad) {

        const nuevoCocinero = new Cocinero({
            nombre,
            especialidad,
            favorito,
            cantidadCapitulos
        });

        nuevoCocinero.save()
        .then(cocinero => {
            res.json(cocinero);
        })
        .catch(err => {
            res.status(500).send({error: "Internal server error"});
        });
    } else {
        res.status(400).send({error: "Parámetros inválidos"});
    }
});

//Editar cocinero
cocinerosRouter.put('/:id', verifyToken, (req, res, next) => {
    const id = req.params.id;
    const {nombre, especialidad, favorito, cantidadCapitulos} = req.body;
    const infoCocinero = {};

    if(nombre) {
        infoCocinero.nombre = nombre;
    }
    if(especialidad) {
        infoCocinero.especialidad = especialidad;
    }

    
    infoCocinero.favorito = favorito;

    if(cantidadCapitulos) {
     
        infoCocinero.cantidadCapitulos = cantidadCapitulos;
    }

    

    Cocinero.findByIdAndUpdate(id, infoCocinero, {new:true})
    .then(cocineroModificado => {
        console.log(cocineroModificado)
        if(cocineroModificado){
            res.json(cocineroModificado);
        }
        res.status(400).end();
    })
    .catch(err => {
        res.status(404).end();
    })
});






//Borrar cocinero
cocinerosRouter.delete("/:id", verifyToken, (req, res) => {
    const id = req.params.id;

    Cocinero.findByIdAndRemove(id)
    .then(result => {
        if(result){
            res.status(204).end();
        }
        res.status(404).end();
    })
    .catch(err => {
        res.status(400),end();
    })
});

module.exports = cocinerosRouter
