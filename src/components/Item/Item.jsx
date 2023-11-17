/* eslint-disable react/prop-types */
import "./Item.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


function CardDescription({ price, category}) {
  
  return (
    <div className="item-card_detail">
      <h5 className="item-card_price-tag">$ {price}  COP / Mes</h5>
      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, id, capacidad }) {
  const stylesButton = {
    backgroundColor: capacidad === 0 ? "grey" : "inherit",
  };

  return (
    <Link to={`/room/${id}`}>
    <div className="item-card">
      <div className="item-card_img">
      <img src={img} alt="Imagen Habitacion"></img>
      </div>
      <div className="item-card_header">
        <h5 style={{marginLeft: "5px"}}>{title}</h5> 
        <small style={{marginLeft: "5px"}}>{category}</small>
        <CardDescription price={(price)}   />
        <Button className="btn-ver-detalles" style={stylesButton}>Ver detalles</Button> 
      </div>
    </div>
    </Link >
  );
}

export default Item;