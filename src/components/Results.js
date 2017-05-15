import React from 'react';

const Results = ({data}) => {
  const rows = data.map((movie) => {
    return(
      <div className="card">
        <img className="card-img-top" src={movie.Poster} alt="Movie poster"/>
        <div className="card-block">
          <h4 className="card-title">{movie.Title}</h4>
          <p className="card-text">{movie.Year}</p>
        </div>
      </div>
    )
  });
  return(
    <div className="card-group">
      {rows}
    </div>
  );
}

export default Results;
