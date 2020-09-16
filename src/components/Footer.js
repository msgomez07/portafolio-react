import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
    return (
        <div className="bg-light">
            <div className="d-flex justify-content-around">
            <div className="mt-5">
                <h3>Contacto</h3>
                <ul className="d-flex flex-column align-items-start">
                    <li>
                        <p><strong>Email:</strong> maicol_sgf@hotmail.com</p>
                    </li>
                    <li>
                        <p><strong>Tel:</strong> (+57) 3507713246 </p>
                    </li>
                    <li>
                        <p><strong>Ciudad:</strong> Medellin-Antioquia</p>
                    </li>
                </ul>
            </div>

            <div className="mt-5">
                <h3>Redes Sociales</h3>
                
                <a className="m-2" href="https://github.com/msgomez07" target="blank"><FontAwesomeIcon className="iconos" icon={["fab", "github"]} />GitHub</a>
                <a className="m-2" href="/" target="blank"><FontAwesomeIcon className="iconos" icon={["fab", "linkedin"]} />Linkedin</a>
            </div>
            
            </div>
            
        </div>
    )
}
