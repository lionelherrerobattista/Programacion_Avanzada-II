import React from 'react';
import PropTypes from "prop-types";
import Movie from './Movie';

const MoviesList = ({lista}) => {
    return ( 
        <div className="movieslist-container">
            {
                lista.map(peli => (
                    <div key={peli.imdbID} className="movieslist-item">
                        <Movie  movie={peli}/>
                    </div>
                ))
            }
        </div>
        
    );
}

MoviesList.prototype = {
    lista: PropTypes.array,
}
 
export default MoviesList;