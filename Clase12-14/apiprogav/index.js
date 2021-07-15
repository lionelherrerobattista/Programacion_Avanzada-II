require('./db/mongo');
const {PORT} = require('./utils/config');
const express = require('express');
const cors = require('cors');
const { handlerNotFound, handlerError, logger } = require('./utils/middlewares');
const personasRouter = require('./routes/personasRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();



app.use(express.json());
app.use(cors());
app.use(logger);

app.get("/", (req, res) => {
    res.send("<h1>API PERSONAS</h1>");
});

//Middleware que consume la ruta
app.use('/api/personas', personasRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use(handlerNotFound);

//Manejar errores con middleware
app.use(handlerError);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});