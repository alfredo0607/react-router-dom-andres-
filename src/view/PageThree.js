import React from "react";
import { Link } from "react-router-dom";

export default function PageThree() {
  return (
    <div
      className="content"
      style={{ marginBottom: "3.6rem", marginTop: "3.5rem" }}
    >
      <h1>Esta es la pagina #3</h1>

      <Link to={"/"}>
        <button className="btn btn-primary m-2">Ir a la Pagina #1</button>
      </Link>

      <Link to={"/pagina-2"}>
        <button className="btn btn-primary m-2">Ir a la Pagina #2</button>
      </Link>
    </div>
  );
}
