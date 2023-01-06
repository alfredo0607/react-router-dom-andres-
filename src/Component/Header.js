/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <header className="position-static">
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="index.html"
            style={{ margin: "0%" }}
          >
            EMPRESA
          </a>

          <div>
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{
                display: "inline-block",
                "text-decoration": "none",
                "text-align": "left",
              }}
            >
              <li className="nav-item" style={{ display: "inline-block" }}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href=" QuienesSomos.html"
                >
                  Quienes somos
                </a>
              </li>
              <li className="nav-item" style={{ display: "inline-block" }}>
                <a className="nav-link" href="Galeria.html">
                  Galeria
                </a>
              </li>
              <div
                className="accordion-item"
                style={{ display: "inline-block" }}
              >
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Menu
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="Alquiler____.html">
                          Alquiler
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href=" Catering.html">
                          Catering
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="Magament____.html">
                          Magament
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="WenddinPlannert.html"
                        >
                          wenddin plannert
                        </a>
                      </li>
                      <hr />
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={{ textAlign: "center" }}
              >
                lateral
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Menu
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className=" list-group">
                      <li className="list-group-item">
                        <a href="Index.html">Inicio</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" EventPlanner.html">Event Planner</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" WenddinPlannert.html">Wedding Planner</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Galeria.html">Galerias</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Servicios.html">Servicios</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Contactos.html">Contacto</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Salones.html">Salones</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Terrazas.html">Terrazas</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Bodas.html">Bodas</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Graduaciones.html">Graduaciones</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Otros servicios
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <a href=" Decoraciones.html">Decoraciones</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Entelados.html">Entelados</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" EventosEmpresariales.html">
                          Eventos Empresariales
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href=" Catering.html">Catering</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" FiestasTematicas.html">Fiesta Tematicas</a>
                      </li>
                      <li className="list-group-item">
                        <a href=" ProduccionDeEventos.html">
                          Produccion de eventos
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href=" RentaDeMobiliario.html">
                          Renta de mobiliario
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
