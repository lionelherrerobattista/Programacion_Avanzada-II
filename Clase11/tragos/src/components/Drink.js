import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Drink = ({children}) => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const {setId, receta, setReceta, setFlagReceta} = useContext(ModalContext);
    const {idDrink, strDrink, strDrinkThumb} = children;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setReceta({});
    };
    
    const handlerClick = () => {
        setId(idDrink);
        setFlagReceta(true);
        handleOpen();
    }

    const traerCantidades = () => {
        const items = [];
        for(let i=1; i <= 16; i++) {
            if(!receta[`strIngredient${i}`])break;
            
            items.push(<li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>);
        }

        return items;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>
                <img src={strDrinkThumb} alt={`Imagen de ${strDrink}`} className="card-img-top"/>
                <div className="card-body">
                    <button className="btn btn-primary w-100" onClick={handlerClick}>Traer receta</button>
                    <Modal  
                    open={open}
                    onClose={handleClose}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{receta.strDrink}</h2>
                            <p>{receta.strInstructions}</p>
                            <ul>{traerCantidades()}</ul>
                            <img src={receta.strDrinkThumb} alt={`Imagen de ${strDrink}`} className="img-fluid my-4" />
                            
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Drink;