import React, { useState } from 'react';
import { Button, FormControl, Grid, Input, InputLabel, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';

const URL = "http://localhost:3000/api/";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 2)
    },
    inputText: {
      width:'100%'
    }
  }));

const frmInicial = {
    username: '',
    password: '',
}

const Login = () => {
    const classes = useStyles();
    const history = useHistory(); 
    const [formulario, setFormulario] = useState(frmInicial);

    const handleSubmit = (e) => {
        const options = {
            method: "POST",
            headers: {
              "Content-type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formulario)
        }

        e.preventDefault();
        
        fetch(URL + 'login', options)
        .then((res) => {
          // false -> promesa rechazada para que la capture el catch:
          return res.ok ? res.json() : Promise.reject(res);
        })
        .then((data) => {
          handlerReset();

          localStorage.setItem("token", JSON.stringify(data.token));

          history.push("/home");
        })
        .catch((err) => {
            alert("Ususario o contraseña incorrectos");
            console.log(err);
        });        
    }

    const handleChange = (e) => {
        setFormulario({...formulario, [e.target.name]:e.target.value});
    }

    const handlerReset = () => {
        setFormulario(frmInicial);
    }

    return ( 
        <Grid container justifyContent="center" alignItems="center" style={{"height": "85vh"}}>  
          <Paper elevation={3} style={{padding: "2.5rem"}}>
            <Grid container justifyContent="center" style={{marginBottom: "2rem", width:"20 vw"}}>
              <Typography variant="h4"> Iniciar sesión</Typography>
            </Grid>
            <form  autoComplete="off" onSubmit={handleSubmit}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <FormControl required className={classes.root}>
                    <InputLabel htmlFor="username">Usuario</InputLabel>
                    <Input id="username" name="username" type="text" className={classes.inputText} value={formulario.username} onChange={handleChange} />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl required className={classes.root}>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input id="password" name="password" type="password" className={classes.inputText} value={formulario.password} onChange={handleChange} />
                  </FormControl>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <FormControl className={classes.root}>
                    <Button id="submit" name="submit" type="submit" variant="contained" color="primary" >
                      Iniciar sesión
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
                <Link to="/registro">Crear Cuenta</Link>
          </Paper>
        </Grid>
     );
}
 
export default Login;