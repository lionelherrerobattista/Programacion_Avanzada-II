import React from 'react';
import PropTypes from "prop-types";

const Movie = ({movie}) => {
    
    const {Title, Year, Poster} = movie;
    
    return ( 
        <div className="card">
            <div className="card-image">
                <figure className="image">
                <img src={Poster} alt="movie poster"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">               
                <div className="media-content">
                    <p className="title is-4">{Title}</p>
                    <p className="subtitle is-6">Año: {Year}</p>
                </div>
                </div>
            </div>
        </div>
     );
}

Movie.propTypes = {
    movie: PropTypes.object,
}
 
export default Movie;