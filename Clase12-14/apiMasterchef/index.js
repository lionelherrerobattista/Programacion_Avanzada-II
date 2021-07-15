require('./db/mongo');
const express = require('express');
const cors = require('cors');
const { handlerNotFound, handlerError, logger } = require('./utils/middlewares');
const { PORT } = require('./utils/config');
const cocinerosRouter = require('./routes/cocinerosRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');


const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.use('/api/cocineros', cocinerosRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

//Middlewares
app.use(handlerNotFound);
app.use(handlerError);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

