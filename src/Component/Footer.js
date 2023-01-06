/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="prueba center">
        <br />
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <h5> EMPRESA </h5>
              <img src="img/people-fill.svg" width="50%" />
              <p>
                Contamos con gran variedad de salones para eventos. Organización
                de bodas, XV años, eventos empresariales, aniversarios, entre
                otros.
              </p>
            </div>
            <div class="col">
              <h5>MENU</h5>
              <ul style={{ textDecoration: "none" }}>
                <li class="list-group-item">
                  <a href="Index.html">Inicio</a>
                </li>
                <li class="list-group-item">
                  <a href=" EventPlanner.html">Event Planner</a>
                </li>
                <li class="list-group-item">
                  <a href=" WenddinPlannert.html">Wedding Planner</a>
                </li>
                <li class="list-group-item">
                  <a href=" Galeria.html">Galerias</a>
                </li>
                <li class="list-group-item">
                  <a href=" Servicios.html">Servicios</a>
                </li>
                <li class="list-group-item">
                  <a href=" Contactos.html">Contacto</a>
                </li>
                <li class="list-group-item">
                  <a href=" Salones.html">Salones</a>
                </li>
                <li class="list-group-item">
                  <a href=" Terrazas.html">Terrazas</a>
                </li>
                <li class="list-group-item">
                  <a href=" Bodas.html">Bodas</a>
                </li>
                <li class="list-group-item">
                  <a href=" Graduaciones.html">Graduaciones</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <h5>Otros servicios</h5>
              <ul>
                <li class="list-group-item">
                  <a href=" Decoraciones.html">Decoraciones</a>
                </li>
                <li class="list-group-item">
                  <a href=" Entelados.html">Entelados</a>
                </li>
                <li class="list-group-item">
                  <a href=" EventosEmpresariales.html">Eventos Empresariales</a>
                </li>
                <li class="list-group-item">
                  <a href=" Catering.html">Catering</a>
                </li>
                <li class="list-group-item">
                  <a href=" FiestasTematicas.html">Fiesta Tematicas</a>
                </li>
                <li class="list-group-item">
                  <a href=" ProduccionDeEventos.html">Produccion de eventos</a>
                </li>
                <li class="list-group-item">
                  <a href=" RentaDeMobiliario.html">Renta de mobiliario</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <h5> Contacto</h5>
              <video
                src="Animacion/Salon de eventos.mp4"
                autoplay
                muted
                width="120%"
                style={{ borderRadius: "5%" }}
              ></video>
            </div>
          </div>
        </div>
        <br />
      </footer>
    </>
  );
}
