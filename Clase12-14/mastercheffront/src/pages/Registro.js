import { Button, FormControl, Grid, Input, InputLabel, makeStyles, Paper, Typography } from "@material-ui/core"
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const URL = "http://localhost:3000/api/";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  inputText: {
    width:'20vw'
  }
}));

const frmInicial = {
    username: '',
    password: '',
    passwordDos: '',
}

const Registro = () => {

    const classes = useStyles();
    const [formulario, setFormulario] = useState(frmInicial);
    const history = useHistory(); 

    const handleSubmit = (e) => {

        e.preventDefault();

        if(formulario.password === formulario.passwordDos){
            const options = {
                method: "POST",
                headers: {
                  "Content-type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    username: formulario.username,
                    password: formulario.password
                })
            }   

            fetch(URL + 'users', options)
            .then((res) => {
            // false -> promesa rechazada para que la capture el catch:
            return res.ok ? res.json() : Promise.reject(res);
            })
            .then((data) => {

                console.log(data);
                handlerReset();
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
                alert("La contraseña tiene que tener más de 6 caracteres");
            });     
        } else {
            window.alert("Las password no coinciden");
        }      
    }

    const handleChange = (e) => {
        setFormulario({...formulario, [e.target.name]:e.target.value});
    }

    const handlerReset = () => {
        setFormulario(frmInicial);
    }
  
    return (
        <Grid container justifyContent="center" alignItems="center" style={{"height": "85vh"}}>
            <Paper elevation={3} style={{padding: "3rem"}}>
                <Grid container justifyContent="center" style={{marginBottom: "2rem"}}>
                    <Typography variant="h4"> Registro de usuario</Typography>
                </Grid>
                <form  autoComplete="off" onSubmit={handleSubmit} style={{"width": "22vw"}}>
                    <Grid container direction="column">
                        <Grid item>
                        <FormControl required className={classes.root}>
                            <InputLabel htmlFor="username">Nombre de usuario</InputLabel>
                            <Input id="username" name="username" type="text" className={classes.inputText} value={formulario.username} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item>
                        <FormControl required className={classes.root}>
                            <InputLabel htmlFor="password">Contraseña</InputLabel>
                            <Input id="password" name="password" type="password" className={classes.inputText} value={formulario.password} onChange={handleChange} />
                        </FormControl>
                        </Grid>
                        <Grid item>
                        <FormControl required className={classes.root}>
                            <InputLabel htmlFor="password">Confirmar Contraseña</InputLabel>
                            <Input id="passwordDos" name="passwordDos" type="password" className={classes.inputText} value={formulario.passwordDos} onChange={handleChange} />
                        </FormControl>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                        <FormControl className={classes.root}>
                            <Button id="submit" name="submit" type="submit" variant="contained" color="primary">
                            Registrarme
                            </Button>
                        </FormControl>
                        </Grid>
                    </Grid>
                </form>
                <Button id="volver" name="volver">
                    <Link to="/">Volver</Link>
                </Button>
            </Paper>
            </Grid>
      );
}
 
export default Registro;