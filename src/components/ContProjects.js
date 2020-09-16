import React from 'react'
import imgHundle from '../img/Hundle.PNG'
import imgPoke from '../img/Pokedex.PNG'
import imgSomos from '../img/QuienesSomos.PNG'

export default function ContProjects() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center bg-secondary">
          <h2>PROJECTS</h2>
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-75"
          data-ride="carousel"
          >

          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imgHundle} className="d-block w-100" alt="imagen hundle" />
            </div>
            <div className="carousel-item">
              <img src={imgPoke} className="d-block w-100" alt="imagen Pokedex" />
            </div>
            <div className="carousel-item">
              <img src={imgSomos} className="d-block w-100" alt="imegen reto api" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
}
