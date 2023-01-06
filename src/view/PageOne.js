import React from "react";
import { Link } from "react-router-dom";

export default function PageOne() {
  return (
    <div
      className="content"
      style={{ marginBottom: "3.6rem", marginTop: "3.5rem" }}
    >
      <h1>Esta es la pagina #1</h1>

      <Link to={"/pagina-2"}>
        <button className="btn btn-primary m-2">Ir a la Pagina #2</button>
      </Link>

      <Link to={"/pagina-3"}>
        <button className="btn btn-primary m-2">Ir a la Pagina #3</button>
      </Link>
    </div>
  );
}
