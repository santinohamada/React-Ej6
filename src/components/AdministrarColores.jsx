import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
const AdministrarColores = () => {
  const [color, setColor] = useState(``);
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const [listaColores, setListaColores] = useState([]);
  useEffect(() => {
    const coloresAlmacenados =
      JSON.parse(localStorage.getItem("colores")) || [];
    setListaColores(coloresAlmacenados);
  }, []);

  const handleSubmit = () => {
    const NuevaListaColores = [...listaColores, color]; //Se añade al ultimo el color
    setListaColores(NuevaListaColores);
    localStorage.setItem("colores", JSON.stringify(NuevaListaColores));
    setColor("");
  };
  const handleDelete = (colorBorrar) => {
    const listaBorrada = listaColores.filter((item) => item !== colorBorrar);
    setListaColores(listaBorrada);
    console.log(listaBorrada);
    localStorage.setItem("colores", JSON.stringify(listaBorrada));
  };
  return (
    <>
      <Card className="cardEstilo">
        <Card.Header>Administrar colores</Card.Header>

        <Card.Body>
          <div className="container">
            <div className="row">
            <div 
  className="col-3" 
  style={{
    backgroundColor: color,
    width:100,
    height:100,
  }}
>
                <div className="w-100"></div>
                
              </div>
              <div className="col-9">
                <div className="d-flex justify-content-center align-items-center align-content-center">
                  <input
                    value={color}
                    onChange={handleColor}
                    type="text"
                    maxLength={7}
                    placeholder="Ingrese un color. Ej: blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button onClick={handleSubmit} variant="info">
            Guardar
          </Button>
        </Card.Footer>
      </Card>

      <div className="container my-5">
        {listaColores.map((colorItem, index) => (
          <Card key={index} className="cardGuardados ">
            <Card.Header>{colorItem}</Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: `${colorItem}`,
                  }}
                >
                  <div className="w-100"></div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
              <Button
                onClick={() => {
                  handleDelete(colorItem);
                }}
                variant="danger"
              >
                Borrar
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AdministrarColores;
