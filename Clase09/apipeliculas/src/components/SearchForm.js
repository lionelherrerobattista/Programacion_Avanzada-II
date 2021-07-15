import React, { useState } from 'react';

const API_KEY = "a8094db0";
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`


const SearchForm = ({onSearch}) => {

    const [titulo, setTitulo] = useState("");


    const handleChange = (e) => {
        setTitulo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( titulo.trim() === ""){
            alert("Datos incompletos!!");
            return;
        }

        const traerLista = async () => {
            try {
    
                let res = await fetch(URL + titulo);
                let data = await res.json();
                
                data.Response === "True" ? onSearch(data.Search) : onSearch({mensaje:data.Error})
    
            } catch(err) {
                console.log(err.status, err.statusText);
            }
            
        }

        traerLista();

    }

    

    return (  
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Find a repository" onChange={handleChange} value={titulo}/>
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>
        </form>
        
    );
}
 
export default SearchForm;