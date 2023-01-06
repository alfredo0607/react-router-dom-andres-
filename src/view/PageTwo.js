import React from "react";
import { Link } from "react-router-dom";

export default function PageTwo() {
  return (
    <div
      className="content"
      style={{ marginBottom: "3.6rem", marginTop: "3.5rem" }}
    >
      <div className="content-2">
        <h1>Esta es la pagina #2</h1>

        <Link to={"/"}>
          <button className="btn btn-primary m-2">Ir a la Pagina #1</button>
        </Link>

        <Link to={"/pagina-3"}>
          <button className="btn btn-primary m-2">Ir a la Pagina #3</button>
        </Link>
      </div>
    </div>
  );
}
