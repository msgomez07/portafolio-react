import React from 'react';
import MichaellG from '../img/MichaellG.png';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ContentIam() {
    return (
      <div className="d-flex flex-column justify-content-center min-vh-100 align-items-center bg-gradient-info">
        <div className='d-flex'>
          <div>
            <img className="imagenp" src={MichaellG} alt="mi foto" />
          </div>

          <div>
            <h1 className="mt-5">Hey I am Michaell</h1>
            <h2>a web developer</h2>
          </div>
        </div>

        <div className="iconos">
          <ul className="contacto-iconos d-flex">
            <li className="m-5">
              <a
                className="links-herramientas"
                href="https://developer.mozilla.org/es/docs/HTML/HTML5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="iconos" icon={["fab", "html5"]} />
              </a>
            </li>
            <li className="m-5">
              <a
                className="links-herramientas"
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="iconos"
                  icon={["fab", "css3-alt"]}
                />
              </a>
            </li>
            <li className="m-5">
              <a
                className="links-herramientas"
                href="https://standardjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="iconos"
                  icon={["fab", "js-square"]}
                />
              </a>
            </li>
            <li className="m-5">
              <a
                className="links-herramientas"
                href="https://es.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="iconos" icon={["fab", "react"]} />
              </a>
            </li>
            <li className="m-5">
              <a
                className="links-herramientas"
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="iconos"
                  icon={["fab", "bootstrap"]}
                />
              </a>
            </li>
            <li className="m-5">
              <a
                className="links-herramientas"
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="iconos" icon={["fab", "git-alt"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}
