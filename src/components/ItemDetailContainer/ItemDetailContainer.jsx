import {  useEffect, useState } from "react";
import "./ItemDetail.css";

import {  useParams, } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getRoomData } from "../../services/Firebase";
import Carrousel from "../Carrousel/Carrousel";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { BotonosRedes } from "../Contacto/Contacto";
import { Icon } from "@iconify/react";


function ItemDetailContainer() {
  const [errors , setErrors] = useState(null)
  const [room, setRoom] = useState(null);

  const id = useParams().id;

  useEffect(() => {
    getRoomData(id).then((respuesta) => {
      setRoom(respuesta);
    })
    .catch(error => {
      setErrors(error.message)
    })
  }, [id]);

if (errors)
return (
  <div >
    <h1>Detalles de la habitación no estan disponibles</h1>
    <p>{errors}</p>
  </div>
);

if (room) {
  return (
    <div style={{paddingTop:"100px"}}>
      <div className="cardDetail">
        <div className="card-detail_img">
          <Carrousel >
          <img src={room.img}  style={{width:"580px" , height:"455px"}}  alt="Imagen Habitación"/>
          <img src={room.img1} style={{width:"580px" , height:"455px"}}  alt="Imagen Habitación"/>
          <img src={room.img2} style={{width:"580px" , height:"455px"}}  alt="Imagen Habitación"/>
          <img src={room.img3} style={{width:"580px" , height:"455px"}}  alt="Imagen Habitación"/>
          </Carrousel>
        </div>
        <div className="card-detail_detail">
          <h1 className="ItemDetailTitle">{room.title}</h1>
          <p className="description">{room.description}</p>
          <h3>$ {(room.price)} Cop / Mes</h3>
          <a href="https://api.whatsapp.com/send?phone=573212402566" target="_blank" rel="noreferrer"  className="WhatsappButton"><Icon icon="ic:baseline-whatsapp"  width={50} height={50}/>Reserva por Whatsapp</a>
        </div>
      </div>
      <BotonosRedes/>
      <CheckOutForm/>
    </div>
  );
}else {
  return(<Loader/>)
}

}

export default ItemDetailContainer;